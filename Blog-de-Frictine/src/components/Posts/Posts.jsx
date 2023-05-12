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
            Oh, ma gueule, j'te raconte mon trip de ouf en Inde pour voir mon
            gourou ! C'était le voyage spirituel de ma life, j'te dis pas !
            Déjà, l'avion, c'était la croisière s'amuse, ma biche ! Les hôtesses
            en saris, les sièges tout confort, et la bouffe épicée à tomber par
            terre. Les meufs dans l'avion, elles étaient toutes en mode
            "Namaste", genre "Tu pars voir ton gourou en Inde ? Trop stylé, ma
            belle !" Arrivée à destination, j'ai plongé direct dans l'ambiance
            indienne. Les couleurs, les odeurs, les bazars de malade, j'étais en
            mode tourbillon de sensations. J'ai enfilé mon sari, des bijoux qui
            brillent de mille feux, et j'ai fait péter mes lunettes de soleil de
            ouf. Direction l'ashram de mon gourou, là où la magie opère. J'ai
            rencontré des yogis, des disciples, des gens en quête de
            spiritualité. Mon gourou, c'est un mec charismatique, avec sa barbe
            et ses yeux perçants. Il a le pouvoir de te transmettre la sagesse
            et la paix intérieure, tu vois le truc. Les journées, c'était un
            enchaînement de méditations, de chants sacrés, de danses exotiques.
            J'ai même fait du yoga sur un tapis de fleurs, ma gueule, un truc de
            ouf ! Les gens autour de moi, ils étaient en transe, ils flottaient
            sur un nuage. Niveau bouffe, j'ai goûté à toutes les spécialités
            indiennes. Des currys qui te font voyager jusqu'au septième ciel,
            des naans bien chauds, des lassis bien frais. Et puis, j'ai appris à
            manger avec les mains, à sentir les saveurs, à être connectée à
            chaque bouchée. Mais tu sais quoi ? Le plus important, c'était cette
            connexion avec moi-même. J'ai plongé au plus profond de mon être,
            j'ai exploré mes pensées, mes émotions, mes rêves. Mon gourou, il
            m'a ouvert les portes de la spiritualité, il m'a montré le chemin
            vers la paix intérieure. Voilà, ma biche, c'était mon voyage de ouf
            en Inde pour voir mon gourou. Entre méditations, chants sacrés,
            découvertes culinaires et rencontres spirituelles, j'ai vécu une
            expérience qui a transformé ma vie. L'Inde, c'est un vrai bain de
            spiritualité, crois-moi, c'est de la bombe atomique !
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
            Hé salut ma gueule ! Tu vas pas le croire, j'te raconte mon voyage
            de ouf à Miami, tu vas être sur le cul, j'te dis pas ! Déjà, tu
            sais, j'me suis pointée là-bas avec ma bande de meufs, en mode
            bikini, lunettes de soleil, talons hauts, tu vois l'délire.
            Direction la plage de South Beach, là où c'est tout chaud, avec le
            sable blanc, les palmiers et les p'tites vagues qui chatouillent tes
            pieds. On s'est fait péter les selfies de ouf devant les cabanes
            colorées, en mode pose lascive, le vent dans les cheveux, histoire
            de montrer qu'on est des vraies bombasses. Les mecs sur la plage,
            ils en pouvaient plus, genre "Oh la mif, regardez ces cagolasses,
            elles viennent d'où ? Marseille ? Trop canons !" Évidemment, on a
            fait péter les fringues de malade. Les robes moulantes, les shorts
            ultra-courts, les talons à paillettes, tout ça quoi ! Tu sais, quand
            tu marches, t'entends le son de la cagole qui claque sur le bitume.
            Les gens se retournaient sur notre passage, ils étaient carrément
            sous le charme, ma biche. Niveau bouffe, on s'est fait péter tous
            les trucs de là-bas. Des burgers de la mort, des frites
            croustillantes, des hot-dogs à s'en péter le bide, sans oublier les
            cocktails de ouf qui te font tourner la tête. On a même fait un
            détour par Little Havana, ambiance latino à fond les ballons, salsa,
            mojitos, tout ça. Le soir, on a sorti nos plus belles tenues pour
            envahir les boîtes de nuit de Miami. Ça faisait zizir de danser
            jusqu'au bout de la nuit sur des sons de ouf, entre hip-hop,
            reggaeton et électro. Les mecs, ils nous tournaient autour comme des
            mouches sur du sirop, genre "T'es trop bonne, la meuf, c'est quoi
            ton secret ?" Bon, tu te doutes bien que j'ai fait un p'tit tour à
            Miami Beach pour voir les stars. J'ai zieuté les villas de ouf, les
            grosses bagnoles, tout ça. Peut-être qu'un jour, ma gueule, je
            m'offrirai une villa là-bas, histoire d'avoir ma petite place au
            soleil. Voilà, mon pote, c'était mon trip de cagole à Miami. Entre
            bronzette, fringues de ouf, bouffes de malade et fiesta jusqu'au
            bout de la night, j'ai kiffé ma race. Miami, c'est le paradis des
            cagoles, crois-moi, c'est de la bombe !
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
            Oh la meuf, t'as pas idée de l'aventure que j'ai vécue à Bali, ma
            gueule ! J'ai fait une retraite spirituelle de ouf, ça m'a mis la
            tête à l'envers, je te dis pas. Déjà, le voyage en avion, c'était un
            truc de dingue. Les sièges super confortables, les écrans avec des
            films de malade, et la bouffe qui te fait voyager jusqu'à l'autre
            bout du monde. Les meufs de la classe affaire, elles étaient toutes
            chic, genre "Hello, tu pars où comme ça ? Bali ? Moi aussi !"
            Arrivée sur place, j'ai été accueillie comme une princesse. Les
            gens, ils sont super souriants, ils t'offrent des fleurs et tout.
            J'avais ma petite villa avec piscine privée, c'était la classe à
            Dallas ! Tu sais, la retraite spirituelle, c'était pas de tout
            repos, faut être honnête. Des cours de yoga à gogo, des méditations
            de ouf, des massages relaxants, tout ça quoi. Mais bon, j'ai kiffé
            ma race. Les paysages, c'était de la bombe atomique. Des rizières à
            perte de vue, des temples magnifiques, des plages de sable fin, et
            le soleil qui te caresse la peau. J'ai même fait une balade à dos
            d'éléphant, c'était un truc de fou ! Niveau bouffe, j'ai découvert
            des trucs de ouf. Des fruits exotiques à gogo, des plats épicés à
            tomber par terre, et le thé au jasmin, une tuerie ! Et puis, j'ai
            rencontré des gens de partout dans le monde, des yogis, des
            méditants, des gens qui cherchent la paix intérieure, tu vois le
            délire. Bon, faut être honnête, j'ai un peu galéré pour me passer de
            mon téléphone portable. Mais tu sais quoi ? J'ai fini par lâcher
            prise, et ça m'a fait un bien fou. Plus de réseaux sociaux, plus de
            notifications, juste moi, la nature et les autres. Voilà, ma biche,
            c'était mon voyage de ouf à Bali pour une retraite spirituelle.
            Entre yoga, méditation, balades à dos d'éléphant et découvertes
            culinaires, j'ai vécu une aventure inoubliable. Bali, c'est un vrai
            paradis pour se ressourcer, crois-moi, je te le recommande à fond !
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
            pote Kei ! Elle m'avait parlé du shintoïsme, une religion trop
            mystique avec des temples et des cérémonies de dingue. Alors moi, tu
            me connais, j'ai décidé de la suivre dans cette aventure spirituelle
            ! On a commencé par Tokyo, une ville de ouf avec des buildings qui
            touchent le ciel et des néons qui clignotent dans tous les sens. On
            s'est baladé dans les rues, en mode "deux cagoles à Tokyo", et on a
            mangé des sushis trop frais et des ramens trop bons. J'étais là, en
            mode "j'adore le Japon, c'est trop kiffant ici !" Mais bon, ce qui
            m'intéressait vraiment, c'était la religion shintoïste. Kei m'a
            emmené voir des temples où les gens se recueillaient et priaient.
            Y'avait des torii, ces portes en bois rouges, et des statues de
            dieux et de déesses. C'était trop beau, une ambiance trop zen, tu
            vois ? On a même assisté à une cérémonie shintoïste, où on a vu des
            prêtres en tenue traditionnelle qui faisaient des incantations.
            J'étais là, en mode "c'est trop mystique ma poule, je me sens
            connectée avec l'univers !" Et puis, on est allé à Kyoto, une ville
            encore plus traditionnelle avec des temples magnifiques et des
            jardins zen. On a visité le Fushimi Inari, un temple trop beau avec
            des milliers de torii alignés sur un chemin. On a marché longtemps,
            mais c'était trop beau, et y'avait une vue de ouf sur la ville en
            haut. Au final, ma gueule, ce voyage au Japon m'a ouvert l'esprit.
            J'ai découvert une autre culture, une autre religion, et j'ai passé
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
            glacées ? Fantelweiss, ouais, comme la fleur de ouf ! Alors voilà,
            j'arrive dans ce coin paumé avec ma doudoune flashy et mes lunettes
            de ski à paillettes, prête à dévaler les pentes comme une vraie
            championne. Et là, je rencontre ce berger, un mec avec une barbe de
            bûcheron et des yeux bleus à faire tomber les chamois. Il me regarde
            et me dit : "Hé toi, t'es Fantelweiss maintenant !", en parlant de
            cette putain de fleur qu'on voit dans les dessins animés. J'étais
            là, genre "Fantelweiss ? Mais c'est trop mignon ma biche, ça va pas
            trop avec mon image de fille du Sud !" Mais bon, le berger, il était
            trop sympa. Il m'a montré ses moutons, tu sais, ceux avec les
            cloches qui font ding-ding dans les montagnes. J'ai même réussi à en
            approcher un et à lui faire un bisou, c'était trop chou ! Le soir,
            on se retrouvait dans sa cabane, à côté du poêle à bois. Il me
            faisait goûter du fromage et du vin chaud, en me racontant des
            histoires de la montagne. J'étais là, en mode "Fantelweiss la
            cagole, en train de manger du fromage avec un berger dans les
            montagnes suisses, ça le fait trop !" Et puis, on a fait une petite
            sortie en raquettes, tu vois le délire. Je glissais et je tombais
            comme une vraie débutante, mais j'avais trop la classe avec mes
            raquettes roses et mes leggings fluos. Les gens me regardaient
            bizarrement, mais j'étais là, en mode "Fantelweiss la Marseillaise,
            elle s'éclate sur les pistes en Suisse, rien ne peut l'arrêter !"
            Alors voilà, ma gueule, c'était mon trip de ouf en Suisse dans les
            montagnes glacées en tant que Fantelweiss la fleur. J'ai découvert
            un autre univers, avec des moutons, du fromage et des raquettes
            roses. C'était pas le genre de voyage que j'imaginais, mais au
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
            ma pote Fanny la peluche ! On s'était rencontré à Marseille, et on
            avait trop kiffé ensemble à faire des soirées et des virées
            shopping. Alors quand elle m'a proposé de la rejoindre en Italie,
            j'ai pas hésité une seconde ! J'ai débarqué à Milan, et j'étais là,
            en mode "coucou l'Italie, me voilà !". J'avais mon petit sac à dos,
            mes lunettes de soleil, et mon accent marseillais qui faisait rire
            les italiens. D'ailleurs, les habitants de la ville m'ont appelé
            Fantaccini, c'était trop marrant ! Fanny m'a fait découvrir la
            ville, on a visité la cathédrale et le théâtre de la Scala, et on a
            mangé des pâtes à la carbonara trop bonnes. Ensuite, on est parti
            pour Venise, la ville de l'amour, avec ses canaux et ses gondoles.
            On a même fait un tour en gondole, avec le gondolier qui chantait
            des chansons d'amour, trop romantique ma poule ! Mais le plus fou,
            c'est quand on est allé à Rome. On a visité le Colisée, l'arc de
            Triomphe et la fontaine de Trevi. Et puis, on a rencontré des
            italiens trop drôles qui nous ont emmené faire la fête dans les bars
            du quartier Trastevere. On a dansé toute la nuit, et j'ai même
            appris à dire "saluton" en italien ! Au final, ma gueule, ce voyage
            en Italie était trop fou ! J'ai vécu des aventures de ouf avec ma
            pote Fanny la peluche, et j'ai rencontré des italiens trop sympas.
            Maintenant, je suis de retour à Marseille, avec plein de souvenirs
            et des photos de ouf, et j'ai envie de repartir en Italie pour vivre
            encore plus d'aventures !
          </p>
        </div>
        <div className={styles.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  );
}
