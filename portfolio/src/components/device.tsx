import { useEffect } from "react"
import { motion, useTransform, useMotionValue } from "framer-motion"
import { Box } from "@dread/core"

interface DeviceProps {
  src: string
}

export function Device({ src, ...props }: DeviceProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useTransform(mouseX, [200, 600], [0, 5])
  const y = useTransform(mouseY, [200, 400], [2.5, 0])
  function handleMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event
    mouseX.set(clientX)
    mouseY.set(clientY)
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  return (
    <Box
      {...props}
      as={motion.figure}
      initial={{ scale: 1 }}
      style={{
        rotateX: y,
        rotateY: x,
      }}
      sx={{
        position: "relative",
        borderRadius: "1rem",
        bg: "accent",
        aspectRatio: "6 / 13",
        height: "auto",
        overflow: "hidden",
        transformStyle: "preserve-3d",
        boxShadow: "0 24px 24px -24px rgba(0,0,0,0.24)",
        border: "0.5rem solid transparent",
        borderColor: "text",
        borderWidth: "2rem 0.5rem",
      }}
    >
      <Box
        as="iframe"
        frameBorder="0"
        src={src}
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  )
}
