import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

export function ArrowDownIcon() {
  return (
    <SvgIcon>
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
    </SvgIcon>
  );
}

export function DoneIcon() {
  return (
    <SvgIcon
      style={{
        backgroundColor: "#32ff6a",
        color: "white",
        border: "1px solid #32ff6a",
        borderRadius: "50%"
      }}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
    </SvgIcon>
  );
}

export function AddIcon() {
  return (
    <SvgIcon
      style={{
        color: "#248ea9",
        cursor: "pointer"
      }}
    >
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </SvgIcon>
  );
}

export function CancelIcon() {
  return (
    <SvgIcon
      style={{
        color: "#ff0000",
        cursor: "pointer"
      }}
    >
      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgIcon>
  );
}

export function CloseIcon() {
  return (
    <SvgIcon
      style={{
        cursor: "pointer"
      }}
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgIcon>
  );
}

export function AcountIcon() {
  return (
    <SvgIcon
      style={{
        cursor: "pointer",
        width: "50px",
        height: "50px"
      }}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgIcon>
  );
}

export function EditIcon() {
  return (
    <SvgIcon
      style={{
        cursor: "pointer",
        width: "25px",
        height: "25px"
      }}
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      <path d="M0 0h24v24H0z" fill="none" />{" "}
    </SvgIcon>
  );
}
