<script setup>
definePageMeta({
  layout: "docs",
});
</script>

<template>
  <Container>
    <TitresH1> Documentation </TitresH1>

    <TextesParagraphe>
      Bienvenue sur la documentation de Medusa Sanctuary.
    </TextesParagraphe>

    <ListsGrid>
      <li>
        <CardsIconCard to="/docs/composants">
          <template #icon>
            <i
              class="ri-list-indefinite text-green-500 group-hover:text-green-700"
            ></i>
          </template>
          Composants
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/layouts">
          <template #icon>
            <i
              class="ri-layout-line text-blue-500 group-hover:text-blue-700"
            ></i>
          </template>
          Layouts
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/icones">
          <template #icon>
            <i class="ri-heart-line text-red-500 group-hover:text-red-700"></i>
          </template>
          Icones
        </CardsIconCard>
      </li>

    <li>
        <CardsIconCard to="/docs/equipe">
          <template #icon>
            <i class="ri-group-fill text-yellow-500 group-hover:text-yellow-700"></i>
          </template>
          Equipe
        </CardsIconCard>
      </li>

      <li>
        <CardsIconCard to="/docs/contact">
          <template #icon>
            <i class="ri-contacts-book-2-line text-purple-500 group-hover:text-purple-700"></i>
          </template>
          Contact
        </CardsIconCard>
      </li>
    </ListsGrid>

  </Container>
</template>
