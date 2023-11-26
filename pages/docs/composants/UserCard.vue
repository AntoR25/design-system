<script>
import UserCard from '@/components/Cards/UserCard.vue';

export default {
  components: {
    UserCard,
  },
};


definePageMeta({
  layout: "docs",
});


</script>

<template>
<Container>
    <TitresH1>UserCard</TitresH1>

    <TextesParagraphe>
    <LazyTextesBold>La UserCard</LazyTextesBold>  est un composant réutilisable conçu pour afficher les informations d'un utilisateur de manière attrayante et structurée. Elle comprend des éléments tels que le nom, une image de profil stylisée, une description et des liens d'action tels que "Profil" et "Contact". Vous pouvez utilisez <LazyTextesBold>les  UserCard</LazyTextesBold> dans vos projets. 
    </TextesParagraphe>
    <br>
    <TitresH1>Exemples</TitresH1>

    <TitresH2>UserCard simple template</TitresH2>

    <TitresH3>Fonctionne avec la balise &lt;UserCard&gt;&lt;/UserCard&gt;</TitresH3>


    <div><UserCard>
    </UserCard></div>



    <br><br>
    <TitresH2>UserCard simple personalisée</TitresH2>

    <TitresH3>Fonctionne avec la balise &lt;UserCard :name="'Antoine'" :description="'Etudiant'"&gt;&lt;/UserCard&gt;</TitresH3>
    
    <div>
    <UserCard :name="'Antoine'" :description="'Etudiant'">
    </UserCard>
  </div>
  <br>

  <TitresH1>UserCard dans une grille</TitresH1>

  
  <ListsGrid class="mx-auto gap-4 mt-4 mb-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      <li><UserCard>
    </UserCard></li>
      <li><UserCard>
    </UserCard></li>
      <li><UserCard>
    </UserCard></li>
      <li><UserCard>
    </UserCard></li>
      <li><UserCard>
    </UserCard></li>
      <li><UserCard>
    </UserCard></li>
    </ListsGrid>

</Container>
</template>