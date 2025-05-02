import { CtaButtonProp } from "@/types/ctaText"

export default function CTAButton({text}: CtaButtonProp){

    return(
        <>
<button
    type="submit"
    aria-label="send message"
    className="flex gap-3 items-center bg-white border-2 border-black rounded-lg px-6 py-3 text-black transition-all duration-[200ms] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-white dark:border-white">
  {text}
  <svg
    className="fill-current"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
        <path
          d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
        />
    </svg>
</button>        
        </>
    )

}
