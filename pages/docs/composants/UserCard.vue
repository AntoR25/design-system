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
      Vous pouvez utilisez les UserCard dans vos projets.
    </TextesParagraphe>

    <TitresH2>Exemples</TitresH2>

    <TextesParagraphe>
      Les UsersCards peuvent être utlisez de la minière suivante...
    </TextesParagraphe>

    <TitresH3>UserCard simple template</TitresH3>

    <div><UserCard>
    </UserCard></div>
    
    <TitresH3>UserCard simple personalisé</TitresH3>
    
    <div>
    <UserCard :name="'Antoine'" :description="'Etudiant'">
    </UserCard>
  </div>
    
</Container>
</template>