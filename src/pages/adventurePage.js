import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/button/button";
import Story from "../components/story/story";
import version2 from "../context/storyTelling";

function AdventurePage() {
  const [paragraph1, setParagraph1] = useState(
    "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris. Hi brains mindless mortuis limbic cortex soulless creaturas optic nerve, imo evil braaiinns stalking monstra hypothalamus adventus resi hippocampus dentevil vultus brain comedat cerebella pitiutary gland viventium. Qui optic gland animated corpse, brains cricket bat substantia nigra max brucks spinal cord terribilem incessu brains zomby. The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro. Nescio brains an Undead cervello zombies. Sicut thalamus malus putrid brains voodoo horror. Nigh basal ganglia tofth eliv ingdead."
  );

  const [paragraph2, setParagraph2] = useState(
    "Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead."
  );

  const [decision, setDecision] = useState(
    "Do you go with the flow or stay where you are??"
  );
  const [button1, setButton1] = useState("Let's go");
  const [button2, setButton2] = useState("Let's gooooo");

  const [image, setImage] = useState("http://pagosafunzone.com/wp-content/uploads/2015/05/Scary-Door-Resident-Evil-Biohazard-Wallpaper.jpg");

  const updateStory = () => {
    setParagraph1(version2.choice1);
    setParagraph2(version2.choice2);

    setDecision(version2.choice3);

    setButton1(version2.button1);
    setButton2(version2.button2);

    setImage(version2.image1);

    if (button1 === version2.button1 && button2 === version2.button2) {
      setParagraph1(version2.choice4);
      setParagraph2(version2.choice5);

      setDecision(version2.choice6);

      setButton1(version2.button3);
      setButton2(version2.button4);

      setImage(version2.image2);
    } else if (
      button1 === version2.button3 &&
      button2 === version2.button4
    ) {
      setParagraph1(version2.choice7);
      setParagraph2(version2.choice8);

      setDecision("Grab the gun or run?");

      setButton1(version2.button5);
      setButton2(version2.button6);

      setImage(version2.image3);
    }
  };

  return (
    <>
      <header>
        <Header />
        <li>
          <Link to="/">Home Page</Link>
        </li>
      </header>

      <Story paragraph1={paragraph1} paragraph2={paragraph2} />

      <img src={image} alt="Scary" />

      <div>
        <h4>{decision}</h4>
        <Button name={button1} onClick={updateStory} />
        <Button name={button2} onClick={updateStory} />
      </div>
      <Footer />
    </>
  );
}

export default AdventurePage;
