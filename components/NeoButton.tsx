import { motion } from "framer-motion";

interface ButtonProps {
    text: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    withIcon: boolean
    size?: 'sm' | 'md' | 'lg'
}

export default function NeoButton({ text, onClick, withIcon = false, size = 'md' }: ButtonProps) {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            type="button"
            aria-label="book a meeting"
            className={`relative flex gap-3 w-auto items-center border-2 border-black rounded-lg ${sizeClasses[size]} text-black
            overflow-hidden
            dark:text-white
            bg-white dark:bg-black
            dark:border-white
            transition-all duration-300 
            hover:translate-x-[-4px] hover:translate-y-[-4px] 
            hover:rounded-md hover:shadow-[4px_4px_0px_gray] 
            hover:text-white  dark:hover:text-black
            active:translate-x-[0px] active:translate-y-[0px] active:shadow-none 
            disabled:opacity-50 disabled:cursor-not-allowed`}
            onClick={onClick}
            whileHover="hover"
            initial="initial"
        >
            <motion.span
                className="absolute inset-0 bg-black dark:bg-white -z-10"
                variants={{
                    initial: { width: 0 },
                    hover: {
                        width: "100%",
                        transition: { duration: 0.3, ease: "easeInOut" }
                    }
                }}
            />

            <span className="relative z-10">{text}</span>

            {withIcon && (
                <svg
                    className="fill-current relative z-10"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                </svg>
            )}
        </motion.button>
    )
}