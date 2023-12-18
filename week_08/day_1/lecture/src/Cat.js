export function Cat(props) {
  const catName = "Miaow";
  return (
    <>
      <h2>
        Hi, I am {catName}! I have {props.limbs} limbs and I am {props.color}{" "}
        and I have {props.eyes || "2"} eyes.
      </h2>
    </>
  );
}

export { Cat as default };
