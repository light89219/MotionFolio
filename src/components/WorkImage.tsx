import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  /** Card is wrapped in an <a>; use inner div and show the outward arrow on hover */
  showLinkArrow?: boolean;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const showArrow = Boolean(props.link || props.showLinkArrow);
  const inner = (
    <>
      {showArrow && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      <img src={props.image} alt={props.alt} />
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor={"disable"}
        >
          {inner}
        </a>
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
        >
          {inner}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
