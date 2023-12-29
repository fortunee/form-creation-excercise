type BandInfoSectionProps = {
  name: string;
  imgUrl: string;
  description_blurb: string;
};
const BandInfoSection = (props: BandInfoSectionProps) => {
  const { name, imgUrl, description_blurb } = props;

  return (
    <section>
      <div>
        <img src={imgUrl} alt={name} height={200} />
        <p>{description_blurb}</p>
      </div>
    </section>
  );
};

export default BandInfoSection;
