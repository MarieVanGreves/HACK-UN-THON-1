import React from "react";
import styles from "./Posts.module.css";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Posts() {
  return (
    <div className={styles.containerPosts}>
      <div className={styles.uniquePostOne}>
        <div className={styles.containerLeft}>
          <img
            className={styles.pictures}
            src="./src/assets/india.png"
            alt="Magnifique paysage de l'Inde !"
          />
          <div>
            <h4 className={styles.date}>11.02.2012</h4>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div>
            <h1 className={styles.title}>SALUT C'EST FANOCH :D</h1>
          </div>
          <p className={styles.paraPost}>
            Oh, ma poule, j'te raconte mon trip de ouf en Inde pour voir mon
            gourou ! C'était le voyage spirituel de ma life, j'te dis pas !
            Dejà, l'avion, c'etait la croisière s'amuse, ma biche ! Les hotesses
            en saris, les sieges tout confort, et la bouffe épicee à tomber par
            terre. Les meufs dans l'avion, elles etaient toutes en mode
            "Namaste", genre "Tu pars voir ton gourou en Inde ? Trop styled, ma
            belle !" Arrivee a destination, j'ai plonge direct dans l'ambiance
            indienne. Les couleurs, les odeurs, les bazars de malade, j'etais en
            mode tourbillon de sensations. J'ai enfile mon sari, des bijoux qui
            brillent de mille feux, et j'ai fait peter mes lunettes de soleil de
            ouf. Direction l'ashram de mon gourou, la ou la magie opere. J'ai
            rencontre des yogis, des disciples, des gens en quête de
            spiritualite. Mon gourou, c'est un mec charismatique, avec sa barbe
            et ses yeux perçants. Il a le pouvoir de te transmettre la sagesse
            et la paix interieure, tu vois le truc. Les journees, c'etait un
            enchainement de meditations, de chants sacres, de danses exotiques.
            J'ai meme fait du yoga sur un tapis de fleurs, ma gueule, un truc de
            ouf ! Les gens autour de moi, ils etaient en transe, ils flottaient
            sur un nuage. Niveau bouffe, j'ai goute a toutes les specialites
            indiennes. Des currys qui te font voyager jusqu'au septieme ciel,
            des naans bien chauds, des lassis bien frais. Et puis, j'ai appris à
            manger avec les mains, a sentir les saveurs, a etre connectee a
            chaque bouchee. Mais tu sais quoi ? Le plus important, c'etait cette
            connexion avec moi-meme. J'ai plonge au plus profond de mon etre,
            j'ai explore mes pensees, mes emotions, mes reves. Mon gourou, il
            m'a ouvert les portes de la spiritualite, il m'a montre le chemin
            vers la paix interieure. Voila, ma biche, c'etait mon voyage de ouf
            en Inde pour voir mon gourou. Entre meditations, chants sacres,
            decouvertes culinaires et rencontres spirituelles, j'ai vecu une
            experience qui a transforme ma vie. L'Inde, c'est un vrai bain de
            spiritualite, crois-moi, c'est de la bombe atomique !
          </p>
        </div>
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>

      <div className={styles.uniquePostTwo}>
        <div className={styles.containerLeft}>
          <img
            className={styles.pictures}
            src="./src/assets/usa.png"
            alt="Miami Beach ~"
          />
          <div>
            <h4 className={styles.date}>24.09.2013</h4>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div>
            <h1 className={styles.title}>SALUT, C'EST FANLINE !</h1>
          </div>
          <p className={styles.paraPost}>
            He salut ma gueule ! Tu vas pas le croire, j'te raconte mon voyage
            de ouf a Miami, tu vas etre sur le cul, j'te dis pas ! Deja, tu
            sais, j'me suis pointee la-bas avec ma bande de meufs, en mode
            bikini, lunettes de soleil, talons hauts, tu vois l'delire.
            Direction la plage de South Beach, la ou c'est tout chaud, avec le
            sable blanc, les palmiers et les p'tites vagues qui chatouillent tes
            pieds. On s'est fait peter les selfies de ouf devant les cabanes
            colorees, en mode pose lascive, le vent dans les cheveux, histoire
            de montrer qu'on est des vraies bombasses. Les mecs sur la plage,
            ils en pouvaient plus, genre "Oh la mif, regardez ces cagolasses,
            elles viennent d'ou ? Marseille ? Trop canons !" Evidemment, on a
            fait peter les fringues de malade. Les robes moulantes, les shorts
            ultra-courts, les talons a paillettes, tout ça quoi ! Tu sais, quand
            tu marches, t'entends le son de la bimbo qui claque sur le bitume.
            Les gens se retournaient sur notre passage, ils etaient carrement
            sous le charme, ma biche. Niveau bouffe, on s'est fait peter tous
            les trucs de la-bas. Des burgers de la mort, des frites
            croustillantes, des hot-dogs a s'en peter le bide, sans oublier les
            cocktails de ouf qui te font tourner la tete. On a meme fait un
            detour par Little Havana, ambiance latino a fond les ballons, salsa,
            mojitos, tout ça. Le soir, on a sorti nos plus belles tenues pour
            envahir les boites de nuit de Miami. Ça faisait zizir de danser
            jusqu'au bout de la nuit sur des sons de ouf, entre hip-hop,
            reggaeton et electro. Les mecs, ils nous tournaient autour comme des
            mouches sur du sirop, genre "T'es trop bonne, la meuf, c'est quoi
            ton secret ?" Bon, tu te doutes bien que j'ai fait un p'tit tour a
            Miami Beach pour voir les stars. J'ai zieute les villas de ouf, les
            grosses bagnoles, tout ça. Peut-être qu'un jour, ma gueule, je
            m'offrirai une villa la-bas, histoire d'avoir ma petite place au
            soleil. Voilà, mon pote, c'etait mon trip de Marseillaise a Miami.
            Entre bronzette, fringues de ouf, bouffes de malade et fiesta
            jusqu'au bout de la night, j'ai kiffe ma race. Miami, c'est le
            paradis des Marseillaise, crois-moi, c'est de la bombe !
          </p>
        </div>
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>

      <div className={styles.uniquePostThree}>
        <div className={styles.containerLeft}>
          <img
            className={styles.pictures}
            src="./src/assets/indonesie.png"
            alt="Temple Hindoue !"
          />
          <div>
            <h4 className={styles.date}>02.04.2014</h4>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div>
            <h1 className={styles.title}>SALUT, C'EST FRICNOUCHE ! :D</h1>
          </div>
          <p className={styles.paraPost}>
            Oh la meuf, t'as pas idee de l'aventure que j'ai vecue a Bali, ma
            gueule ! J'ai fait une retraite spirituelle de ouf, ça m'a mis la
            tete a l'envers, je te dis pas. Dejà, le voyage en avion, c'etait un
            truc de dingue. Les sieges super confortables, les ecrans avec des
            films de malade, et la bouffe qui te fait voyager jusqu'a l'autre
            bout du monde. Les meufs de la classe affaire, elles etaient toutes
            chic, genre "Hello, tu pars ou comme ça ? Bali ? Moi aussi !"
            Arrivee sur place, j'ai ete accueillie comme une princesse. Les
            gens, ils sont super souriants, ils t'offrent des fleurs et tout.
            J'avais ma petite villa avec piscine privee, c'etait la classe a
            Dallas ! Tu sais, la retraite spirituelle, c'etait pas de tout
            repos, faut etre honnete. Des cours de yoga a gogo, des meditations
            de ouf, des massages relaxants, tout ça quoi. Mais bon, j'ai kiffe
            ma race. Les paysages, c'etait de la bombe atomique. Des rizieres a
            perte de vue, des temples magnifiques, des plages de sable fin, et
            le soleil qui te caresse la peau. J'ai meme fait une balade à dos
            d'elephant, c'etait un truc de fou ! Niveau bouffe, j'ai decouvert
            des trucs de ouf. Des fruits exotiques a gogo, des plats épices a
            tomber par terre, et le the au jasmin, une tuerie ! Et puis, j'ai
            rencontre des gens de partout dans le monde, des yogis, des
            meditants, des gens qui cherchent la paix interieure, tu vois le
            delire. Bon, faut etre honnete, j'ai un peu galere pour me passer de
            mon téléphone portable. Mais tu sais quoi ? J'ai fini par lacher
            prise, et ça m'a fait un bien fou. Plus de reseaux sociaux, plus de
            notifications, juste moi, la nature et les autres. Voila, ma biche,
            c'etait mon voyage de ouf a Bali pour une retraite spirituelle.
            Entre yoga, meditation, balades à dos d'elephant et decouvertes
            culinaires, j'ai vecu une aventure inoubliable. Bali, c'est un vrai
            paradis pour se ressourcer, crois-moi, je te le recommande a fond !
          </p>
        </div>
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>

      <div className={styles.uniquePostFour}>
        <div className={styles.containerLeft}>
          <img
            className={styles.pictures}
            src="./src/assets/japon.png"
            alt="Porte japonaise"
          />
          <div>
            <h4 className={styles.date}>19.05.2014</h4>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div>
            <h1 className={styles.title}>SALUT, C'EST FANTIGURUMI !</h1>
          </div>
          <p className={styles.paraPost}>
            Wesh ma poule, j'ai fait un voyage de ouf au Japon pour retrouver ma
            pote Kei ! Elle m'avait parle du shintoïsme, une religion trop
            mystique avec des temples et des ceremonies de dingue. Alors moi, tu
            me connais, j'ai decide de la suivre dans cette aventure spirituelle
            ! On a commence par Tokyo, une ville de ouf avec des buildings qui
            touchent le ciel et des neons qui clignotent dans tous les sens. On
            s'est baladees dans les rues, en mode "deux potos a Tokyo", et on a
            mange des sushis trop frais et des ramens trop bons. J'etais la, en
            mode "j'adore le Japon, c'est trop kiffant ici !" Mais bon, ce qui
            m'interessait vraiment, c'etait la religion shintoïste. Kei m'a
            emmenee voir des temples ou les gens se recueillaient et priaient.
            Y'avait des torii, ces portes en bois rouges, et des statues de
            dieux et de deesses. C'etait trop beau, une ambiance trop zen, tu
            vois ? On a meme assiste a une ceremonie shintoïste, ou on a vu des
            pretres en tenue traditionnelle qui faisaient des incantations.
            J'etais la, en mode "c'est trop mystique ma poule, je me sens
            connectee avec l'univers !" Et puis, on est allee à Kyoto, une ville
            encore plus traditionnelle avec des temples magnifiques et des
            jardins zen. On a visite le Fushimi Inari, un temple trop beau avec
            des milliers de torii alignes sur un chemin. On a marche longtemps,
            mais c'etait trop beau, et y'avait une vue de ouf sur la ville en
            haut. Au final, ma gueule, ce voyage au Japon m'a ouvert l'esprit.
            J'ai decouvert une autre culture, une autre religion, et j'ai passe
            des moments de ouf avec ma pote Kei. Maintenant, j'ai un souvenir
            trop beau de cette aventure, et j'ai envie de retourner au Japon
            pour explorer encore plus !
          </p>
        </div>
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>

      <div className={styles.uniquePostFive}>
        <div className={styles.containerLeft}>
          <img
            className={styles.pictures}
            src="./src/assets/suisse.png"
            alt="Les belles montagnes de Suisse"
          />
          <div>
            <h4 className={styles.date}>12.10.2015</h4>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div>
            <h1 className={styles.title}>SALUT, C'EST FANTELWEISS :D</h1>
          </div>
          <p className={styles.paraPost}>
            Oh ma gueule, t'as vu ça ? C'est moi, la meuf de Marseille, et
            devine comment ils m'appellent ici en Suisse dans les montagnes
            glacees ? Fantelweiss, ouais, comme la fleur de ouf ! Alors voila,
            j'arrive dans ce coin paume avec ma doudoune flashy et mes lunettes
            de ski a paillettes, prete a devaler les pentes comme une vraie
            championne. Et la, je rencontre ce berger, un mec avec une barbe de
            bucheron et des yeux bleus à faire tomber les chamois. Il me regarde
            et me dit : "He toi, t'es Fantelweiss maintenant !", en parlant de
            cette putain de fleur qu'on voit dans les dessins animes. J'etais
            la, genre "Fantelweiss ? Mais c'est trop mignon ma biche, ça va pas
            trop avec mon image de fille du Sud !" Mais bon, le berger, il etait
            trop sympa. Il m'a montre ses moutons, tu sais, ceux avec les
            cloches qui font ding-ding dans les montagnes. J'ai meme reussi a en
            approcher un et a lui faire un bisou, c'etait trop chou ! Le soir,
            on se retrouvait dans sa cabane, a côté du poele a bois. Il me
            faisait gouter du fromage et du vin chaud, en me racontant des
            histoires de la montagne. J'etais la, en mode "Fantelweiss la
            fadasse, en train de manger du fromage avec un berger dans les
            montagnes suisses, ça le fait trop !" Et puis, on a fait une petite
            sortie en raquettes, tu vois le delire. Je glissais et je tombais
            comme une vraie debutante, mais j'avais trop la classe avec mes
            raquettes roses et mes leggings fluos. Les gens me regardaient
            bizarrement, mais j'étais la, en mode "Fantelweiss la Marseillaise,
            elle s'eclate sur les pistes en Suisse, rien ne peut l'arreter !"
            Alors voila, ma gueule, c'etait mon trip de ouf en Suisse dans les
            montagnes glacees en tant que Fantelweiss la fleur. J'ai decouvert
            un autre univers, avec des moutons, du fromage et des raquettes
            roses. C'etait pas le genre de voyage que j'imaginais, mais au
            final, ça m'a fait kiffer ma race !
          </p>
        </div>
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>

      <div className={styles.uniquePostSix}>
        <div className={styles.containerLeft}>
          <img
            className={styles.pictures}
            src="./src/assets/italie.png"
            alt="On y trouve de bonnes spaghettis !"
          />
          <div>
            <h4 className={styles.date}>08.06.2016</h4>
          </div>
        </div>
        <div className={styles.containerRight}>
          <div>
            <h1 className={styles.title}>SALUT, C'EST FANTACCINI !</h1>
          </div>
          <p className={styles.paraPost}>
            Wesh ma poule, j'ai fait un voyage de ouf en Italie pour retrouver
            ma pote Fanny la peluche ! On s'etait rencontrees a Marseille, et on
            avait trop kiffe ensemble a faire des soirees et des virees
            shopping. Alors quand elle m'a propose de la rejoindre en Italie,
            j'ai pas hesité une seconde ! J'ai debarque a Milan, et j'étais la,
            en mode "coucou l'Italie, me voila !". J'avais mon petit sac à dos,
            mes lunettes de soleil, et mon accent marseillais qui faisait rire
            les italiens. D'ailleurs, les habitants de la ville m'ont appelee
            Fantaccini, c'etait trop marrant ! Fanny m'a fait decouvrir la
            ville, on a visite la cathedrale et le theatre de la Scala, et on a
            mange des pates a la carbonara trop bonnes. Ensuite, on est partiees
            pour Venise, la ville de l'amour, avec ses canaux et ses gondoles.
            On a meme fait un tour en gondole, avec le gondolier qui chantait
            des chansons d'amour, trop romantique ma poule ! Mais le plus fou,
            c'est quand on est allees à Rome. On a visite le Colisee, l'arc de
            Triomphe, la porte de Brandebourg et la fontaine de Trevi. Et puis,
            on a rencontre des italiens trop droles qui nous ont emmenees faire
            la fete dans les bars du quartier Trastevere. On a danse toute la
            nuit, et j'ai meme appris a dire "Hola que tal !" en italien ! Au
            final, ma gueule, ce voyage en Italie etait trop fou ! J'ai vecu des
            aventures de ouf avec ma pote Fanny la peluche, et j'ai rencontre
            des italiens trop sympas. Maintenant, je suis de retour a Marseille,
            avec plein de souvenirs et des photos de ouf, et j'ai envie de
            repartir en Italie pour vivre encore plus d'aventures !
          </p>
        </div>
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  );
}
