const SkillCard = ({ part }) => {
  return (
    <div className="container flex py-2 px2 rounded">
      <div className="">{part.type}: &nbsp;</div>
      <div className="">{part.name}</div>
    </div>
  );
};

export default SkillCard;

// position: relative;
//     padding: 7
// px
// ;
//     border-radius: 5
// px
// ;
//     color: #fff;
//     transition: all .3s ease-in-out;
//     display: block;
//     text-decoration: none;
//     box-sizing: border-box;
//     text-align: center;
//     border: 1
// px
//  solid rgba(255,255,255,.1);
