import { Box } from "@mui/system";
import { useState } from "react";
import { motion } from "framer-motion";
export default function useAlert() {
    const [bgColor, setBgColor] = useState("");
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    function trigger(color, words) {
        setBgColor(color);
        setText(words);
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    }

    function Jsx() {
        return (
            <Box
                id={"alert"}
                width={"300px"}
                zIndex={100}
                height={"60px"}
                position={"fixed"}
                top={"0"}
                left={"calc( 50% - 150px )"}
            >
                <motion.div
                    style={{
                        background: bgColor,
                        width: "100%",
                        height: "100%",
                        transition: "opacity 1s linear",
                        opacity: isVisible ? 1 : 0,
                        padding:"20px",
                        borderRadius:"20px",
                        fontWeight:"900"
                    }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                >
                    {text}
                </motion.div>
            </Box>
        );
    }

    return [Jsx, trigger];
}