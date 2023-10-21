import React from "react";

export default function Map() {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14435.237437284492!2d55.29250349135948!3d25.24334526272822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d46590d341%3A0x59ca699bcff41b8c!2sAl%20Makhawi%20Building!5e0!3m2!1sen!2s!4v1697823989698!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
