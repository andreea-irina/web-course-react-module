function SidebarCard(props) {
  const { title, description } = props;

  return (
    <div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

function BlogCard(props) {
  const { title, description, image } = props;

  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export { SidebarCard, BlogCard };
