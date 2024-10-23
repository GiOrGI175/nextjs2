const CustomPost = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div>
      <h1>this post id is: {params.id}</h1>
    </div>
  );
};

export default CustomPost;
