**Titre du défi : Bloc-notes magique**

**Aperçu:**
Créez une application Magical Memo Pad à l'aide de TypeScript et Next.js. L'application permet aux utilisateurs de créer et de gérer des notes avec une touche de magie. Chaque note peut avoir une propriété magique unique, améliorant ainsi l’expérience utilisateur. Implémentez un design inspiré de [ce design Figma](https://www.figma.com/community/file/877826120491545963).

**Exigences:**

1. **Maîtrise de la dactylographie :**
 - Utilisez TypeScript pour définir des types de notes et toute autre structure de données pertinente.
 - Assurer la sécurité des types pour détecter les erreurs potentielles pendant le développement.

2. **Propreté du code et évitement des bogues :**
 - Adhérer à des pratiques de codage propres.
 - Implémentez la gestion des erreurs pour des scénarios tels que des appels d'API échoués, des données incorrectes ou des entrées utilisateur inattendues.

3. **Next.js et React Framework :**
 - Utilisez Next.js pour le rendu côté serveur et la navigation côté client.
 - Mettre en place un système de création et de gestion de notes.
 - Utilisez les composants React pour l'interface utilisateur et gérez efficacement l'état.

4. **Propriétés de la note magique :**
 - Chaque note doit avoir une propriété magique (par exemple, changement de couleurs, arrière-plan animé, effet lumineux).
 - Permettre aux utilisateurs de choisir la propriété magique lors de la création d'une note.

5. **Mise en œuvre de la conception :**
 - Implémentez le design Magical Memo Pad inspiré de [ce design Figma] (https://www.figma.com/community/file/877826120491545963).
 - Faites attention aux détails qui améliorent l'expérience utilisateur et rendent l'application visuellement attrayante.
 - Nous suggérons d'utiliser Tailwind CSS pour la mise en œuvre de la conception.

**Informations Complémentaires:**
- Les utilisateurs peuvent créer des notes magiques avec un titre, un contenu et une propriété magique choisie.
- Les propriétés magiques doivent être subtiles mais perceptibles, améliorant l'attrait visuel sans être distrayantes.

- **États magiques :**
 - *Transformation colorée :* La note subit une transformation de couleur subtile et magique au fil du temps.
 - *Animation flottante :* La note plane doucement au-dessus de la surface du bloc-notes, ajoutant une touche de dynamisme.
 - *Paillettes scintillantes :* Des particules de paillettes scintillantes entourent la note, créant un effet visuellement enchanteur.
 - *Encre invisible :* Le contenu de la note est initialement invisible et se révèle lentement au fur et à mesure que l'utilisateur interagit avec lui.
 - *Lueur mystique :* La note émet une lueur douce et mystique, la faisant ressortir dans les environnements faiblement éclairés.

- **Persistance des données :**
 - Utiliser PostgreSQL pour la persistance des données.
 - Implémentez des schémas de base de données pour stocker les informations sur les notes, y compris les titres, le contenu et les propriétés magiques choisies.
 - Assurer une gestion appropriée des connexions et des erreurs lors de l'interaction avec la base de données PostgreSQL.

- **Considérations techniques :**
 - Envisagez d'utiliser Docker si cela vous convient. Mentionnez dans votre documentation comment Docker peut être utilisé pour rationaliser le processus de configuration.
 - Minimiser l'utilisation de dépendances externes pour garantir un processus d'évaluation fluide.

**Critère d'évaluation:**
1. **Maîtrise de la dactylographie :**
 - Utilisation correcte des fonctionnalités de TypeScript.
 - Absence d'erreurs liées au type.

2. **Propreté du code et évitement des bogues :**
 - Structure de code propre et bien organisée.
 - Gestion efficace des erreurs.

3. **Next.js et React Framework :**
 - Utilisation appropriée des fonctionnalités de Next.js.
 - Utilisation efficace des composants React.

4. **Propriétés de la note magique :**
 - Mise en œuvre créative et visuellement attrayante des propriétés magiques.
 - Sélection conviviale de propriétés magiques lors de la création de notes.

5. **Mise en œuvre de la conception :**
 - Fidélité au design fourni.
 - Créativité et souci du détail dans la mise en œuvre du thème magique.

6. **Persistance des données avec PostgreSQL :**
 - Bonne intégration de PostgreSQL pour le stockage des données.
 - Implémentation de schémas et de requêtes de bases de données.
 - Gestion efficace des erreurs et gestion des connexions.

**Consignes de soumission :**

Partagez un lien vers un référentiel accessible au public, tel que GitHub ou GitLab, qui héberge le code de votre projet et la documentation associée.
Au minimum, incluez un fichier README.md détaillant les aspects clés de votre implémentation.

De plus, assurez-vous que toute référence à « ______ » est entièrement exclue de la base de code et du référentiel. L'objectif principal de ce défi est d'évaluer votre méthodologie et votre approche de mise en œuvre de l'application plutôt que des détails spécifiques liés à l'entreprise. Votre soumission doit refléter une mise en œuvre claire et bien pensée, démontrant votre compétence technique et votre créativité.

Remarque : certains éléments de conception, comme les propriétés de la note magique, peuvent ne pas être explicitement couverts dans la conception Figma fournie.
Les candidats sont encouragés à faire preuve de créativité et à mettre en œuvre ces fonctionnalités dans le cadre du défi.