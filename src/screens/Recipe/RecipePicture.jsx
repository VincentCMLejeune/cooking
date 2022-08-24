export default function RecipePicture(props) {
  const { img } = props;
  

  return (
    <div>
      <h3>Recipe Picture, motherfucker</h3>
      <button onClick={() => console.log(img)}>CONSOLE</button>
      <img src={img} />
    </div>
  );
}
