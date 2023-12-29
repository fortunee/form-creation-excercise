type BandInfoSectionProps = {
  name: string;
  imgUrl: string;
  description_blurb: string;
};
const BandInfoSection = (props: BandInfoSectionProps) => {
  const { name, imgUrl, description_blurb } = props;

  return (
    <section>
      <img src={imgUrl} alt={name} height={600} />
      {/** @todo: Sanitize description_blurb before rendering */}
      <div dangerouslySetInnerHTML={{ __html: description_blurb }} />
    </section>
  );
};

export default BandInfoSection;
