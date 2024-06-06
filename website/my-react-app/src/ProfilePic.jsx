
function ProfilePic() {

    const imgUrl = './src/assets/pfp.jpg';
    //when you click on the image, it will disappear
    const handleClick = (e) => e.target.style.display = "none";

    return(<img src={imgUrl} onClick={(e) => handleClick(e)}></img>)

}

export default ProfilePic