import styleSection from './SectionSeparator.module.css';

const SectionSeparator = ({section}) => {
  return(
    <>
      <div className={styleSection.separator_container}>
        <p>{section}</p>
        <a href="">Load More</a>
      </div>
    </>
  );
};

export default SectionSeparator;