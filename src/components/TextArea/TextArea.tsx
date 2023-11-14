// TextArea.tsx
import React from "react";
import "./TextArea.css"; // Only if needed for styles not covered by props

interface TextAreaProps {
  padding?: string;
  margin?: string;
  textAlign?: "left" | "center" | "right";
  letterSpacing?: string;
  lineHeight?: string;
  backgroundColor?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  padding,
  margin,
  textAlign,
  letterSpacing,
  lineHeight,
  backgroundColor,
  ...props
}) => {
  const style = {
    padding,
    margin,
    textAlign,
    letterSpacing,
    lineHeight,
    backgroundColor,
  };

  return <textarea style={style} {...props}></textarea>;
};

export { TextArea };
