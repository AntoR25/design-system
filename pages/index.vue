<template>
  <layout>
  <Container>
    <TitresH1> Accueill </TitresH1>

    <TitresH3> Bienvenue sur le site !</TitresH3> 
      
 <TitresH3>Medusa sanctuary, est une entreprise qui lutte pour la protection des méduses 
dans l'ocean, de leur bien être, ainsi que de leur bon développement/croissance. </TitresH3>

<div class="p-4">
  <img src="https://cdn.pixabay.com/photo/2010/12/13/10/32/jellyfish-2883_1280.jpg" class="w-1/2">
</div>

    <TitresH1>Nos Projets </TitresH1>
    <div class="flex flex-wrap justify-start gap-4">
    <div class="flex flex-col border-2 border-black overflow-hidden p-4 rounded-xl shadow-large bg-blue-200 w-80">
          <div class="px-6 py-7 sm:p-5 sm:pb-10">
            <div class="items-center w-full justify-center grid grid-cols-1 text-left">
              <div>
                <h2 class="text-black font-bold text-lg lg:text-2xl">Projet 1</h2>
                <p class="text-black tracking-tight xl:text-1xl mt-5">
                  Mise en place d'une equipe spétialisée pour aller tuer les prédateurs de méduses dans leur milieu naturel. Exepté les êtres humains.
                </p>
              </div>       
            </div>
          </div>
        </div>

        <div class="flex flex-col border-2 border-black overflow-hidden p-4 rounded-xl shadow-large bg-blue-200 w-80">
          <div class="px-6 py-7 sm:p-5 sm:pb-10">
            <div class="items-center w-full justify-center grid grid-cols-1 text-left">
              <div>
                <h2 class="text-black font-bold text-lg lg:text-2xl">Projet 2</h2>
                <p class="text-black tracking-tight xl:text-1xl mt-5">
                  Reproduction intensive de méduses dans des cuves, afin de les relacher dans la mer à proximité des plages. Pour objectif de les faire découvrir à un maximum de personnes.
                </p>
              </div>       
            </div>
          </div>
        </div>

        <div class="flex flex-col border-2 border-black overflow-hidden p-4 rounded-xl shadow-large bg-blue-200 w-80">
          <div class="px-6 py-7 sm:p-5 sm:pb-10">
            <div class="items-center w-full justify-center grid grid-cols-1 text-left">
              <div>
                <h2 class="text-black font-bold text-lg lg:text-2xl">Projet 3</h2>
                <p class="text-black tracking-tight xl:text-1xl mt-5">
                  Atelier piqure chez les enfants, pour les habituer à la douleur au contact d'une méduse. Ce qui ne tue pas, te rend plus fort. 
                </p>
              </div>       
            </div>
          </div>
        </div>

      </div>
    <TitresH1> Documentation </TitresH1>
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
</layout>
</template>