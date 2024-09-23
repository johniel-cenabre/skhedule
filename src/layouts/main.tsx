import React from "react";
import { CommonProps } from "../utils/types";
import styles from "./main.module.css";

export default function Main({ children }: CommonProps) {
  return <div className={styles.container}>{children}</div>;
}
