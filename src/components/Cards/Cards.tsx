import React from "react";
import phineas from "../../images/Fineasz_Flynn.png";
import ferb from "../../images/ferb.png";
import candace from "../../images/candace.jpg";
import linda from "../../images/linda.png";
import lawrance2 from "../../images/lawrance2.jpg";
import pepe from "../../images/pepe.png";
import OneCard from "./OneCard";

export default function Cards() {
  return (
    <>
      <OneCard title="Phineas" alt="phineas" image={phineas} name="Phineas" content='Phineas Flynn-Fletcher is a young boy in the Flynn-Fletcher family. He is the son of Linda Flynn and step-son of Lawrence Fletcher. '/>
      <OneCard title="Ferb" alt="ferb" image={ferb} name="Ferb" content='Ferb Fletcher is a British child of the Fletcher family currently living in the American city of Danville. He is the step-son of Linda Flynn and son of Lawrence Fletcher.'/>
      <OneCard title="candace" alt="candace" image={candace} name="candace" content='Candace Gertrude Flynn is the 15-year-old sister of Phineas Flynn and the step-sister of Ferb Fletcher.'/>
      <OneCard title="Linda" alt="linda" image={linda} name="Linda" content='Linda Flynn-Fletcher (usually addressed and credited as "Mom" or "Mrs Flynn-Fletcher" by Isabella) is the mother of Phineas and Candace Flynn, and the stepmother of Ferb Fletcher.'/>
      <OneCard
        title="Lawrance"
        alt="lawrance"
        image={lawrance2}
        name="Lawrance"
        content='Lawrence Fletcher, Ph.D., usually addressed and credited as "Dad", is Ferbs biological father, the step-father of Phineas and Candace and the husband of Linda'
      />
      <OneCard title="Pepe" alt="pepe" image={pepe} name="Pepe" content='Perry the Platypus, code named Agent P, is Phineas and Ferbs pet platypus, who, unbeknownst to his owners, lives a double life as a secret agent for the O.W.C.A.'/>
      
    </>
  );
}
