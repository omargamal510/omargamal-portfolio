"use client";
import React from "react";
import { useEffect, useRef } from "react";

interface ObserverProps {
  children: React.ReactNode;
  yaxis?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Observer = ({
  children,
  yaxis = false,
  className,
  style,
}: ObserverProps) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              `!translate-x-0`,
              `!translate-y-0`,
              "opacity-100"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      refs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [children]);

  return (
    <div style={style} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          className={` ${
            yaxis ? "translate-y-12" : "translate-x-12"
          }  opacity-0 transition-800`}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Observer;
