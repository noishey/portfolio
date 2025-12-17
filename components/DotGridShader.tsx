"use client"

type DotGridShaderProps = React.ComponentProps<"div">

export default function DotGridShader(props: DotGridShaderProps) {
  const { style, ...rest } = props
  return (
    <div
      {...rest}
      style={{
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(circle, rgba(58,58,58,0.6) 1px, transparent 1.2px)",
        backgroundSize: "10px 10px",
        width: "100%",
        height: "100%",
        ...(style || {}),
      }}
    />
  )
}
