<script setup>
definePageMeta({
  layout: "docs",
});

const consoleLog = `console.log('hello')`;
const code = `<TextesCode code="${consoleLog}" language="js" />`;
</script>

<template>
  <Container>
    <TitresH1>Textes</TitresH1>

    <TextesParagraphe>
      Utilisez les composants de texte pour afficher des paragraphes ou des
      blocks de code, etc.
    </TextesParagraphe>

    <TitresH2>Paragraphe</TitresH2>

    <TextesParagraphe>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas
      voluptatibus quidem doloribus. Quisquam voluptatum, quibusdam, voluptates
      quia quae voluptatem, quos quod quas voluptatibus quidem doloribus.
    </TextesParagraphe>
    <TextesCode
      :code="`<TextesParagraphe>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas voluptatibus quidem doloribus. Quisquam voluptatum, quibusdam, voluptates quia quae voluptatem, quos quod quas voluptatibus quidem doloribus.
</TextesParagraphe>`"
    />

    <TitresH2>Bold</TitresH2>

    <TextesBold>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextesBold>

    <TextesCode
      :code="`<TextesBold>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextesBold>`"
    />

    <TitresH2>Italic</TitresH2>

    <TextesItalic>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextesItalic>

    <TextesCode
      :code="`<TextesItalic>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextesItalic>`"
    />

    <TitresH2>Underline</TitresH2>

<div class="bg-white p-2"><TextesUnderline>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextesUnderline></div>
    
    
    <TextesCode
      :code="`<TextesUnderline>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextesUnderline>`"
    />


    <TitresH2>Citation</TitresH2>

    <TextesCitation>La vie est une citation réelle. - Auteur Anonyme.</TextesCitation>

    <TextesCode
      :code="`<TextesCitation>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TextesCitation>`"
    />

    <TitresH2>Code</TitresH2>

    <TextesParagraphe> Language par défaut : vue </TextesParagraphe>

    <TextesCode :code="consoleLog" language="js" />

    <TextesCode :code="code" />
  </Container>
</template>
