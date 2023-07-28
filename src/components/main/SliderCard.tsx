interface SliderCardProps {
  cardSrc: string;
  alt?: string;
  title: string;
}

const SliderCard: React.FC<SliderCardProps> = (props) => {
  return (
    <div className="w-full flex justify-end">
      <a className="flex flex-col justify-center mr-2 self-start flex-grow-0 flex-shrink-0 flex-auto  w-fit">
        <img
          src={props.cardSrc}
          alt={props.alt}
          loading="lazy"
          draggable="false"
          className="rounded-3xl w-[75px] h-[75px] sm:w-[90px] sm:h-[90px] mb-2 object-cover"
        />
        <h3 className="flex flex-wrap justify-center items-start text-sm sm:text-base">
          {props.title}
        </h3>
      </a>
    </div>
  );
};

export default SliderCard;
