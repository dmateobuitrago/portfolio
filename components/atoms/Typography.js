import React from "react";
import styles from "./Typography.module.css";

class Typography extends React.Component {
  render() {
    const { type, bold, dark, align, className, children } = this.props;

    const classes = [
      styles.base,
      styles[type] || styles.body,
      dark ? styles.dark : styles.light,
      bold ? styles.bold : null,
      className,
    ].filter(Boolean).join(" ");

    return (
      <div
        className={classes}
        style={align ? { textAlign: align } : undefined}
      >
        {children}
      </div>
    );
  }
}

export default Typography;
