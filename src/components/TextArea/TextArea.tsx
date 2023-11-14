import React from "react";

interface TextAreaProps {
  padding?: string;
  margin?: string;
  textAlign?: "left" | "center" | "right";
  letterSpacing?: string;
  lineHeight?: string;
  backgroundColor?: string;
  rows?: number;
  label?: string;
  labelWeight?: string;
  labelColor?: string;
  textColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  placeholder?: string;
  scrollbarColor?: string;
  focusOutline?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  padding,
  margin,
  textAlign,
  letterSpacing,
  lineHeight,
  backgroundColor,
  rows = 3,
  label,
  labelWeight,
  labelColor,
  textColor,
  borderRadius,
  borderWidth,
  borderColor,
  borderStyle,
  placeholder,
  scrollbarColor,
  focusOutline,
  ...props
}) => {
  const textAreaStyle = {
    padding,
    margin,
    textAlign,
    letterSpacing,
    lineHeight,
    backgroundColor,
    color: textColor,
    borderRadius,
    borderWidth,
    borderColor,
    borderStyle,
    outline: focusOutline,
    overflow: "auto",
    scrollbarColor,
  };

  return (
    <div>
      {label && (
        <label style={{ fontWeight: labelWeight, color: labelColor }}>
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        style={textAreaStyle}
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};

export { TextArea };
