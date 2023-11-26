export const inputText = `<InputsGroup class="max-w-xs">
    <InputsLabel name="nom">Nom</InputsLabel>
    <InputsTexte name="nom" placeholder="Votre nom" />
</InputsGroup>`;

export const inputTextWithError = `<InputsGroup class="max-w-xs">
    <InputsLabel name="nom">Nom</InputsLabel>
    <InputsTexte name="nom" placeholder="Votre nom" />
    <InputsErreur>Le champs nom est requis</InputsErreur>
</InputsGroup>`;

export const textarea = `<InputsGroup class="max-w-xs">
    <InputsLabel name="description">Description</InputsLabel>
    <InputsTextarea name="description" placeholder="Votre texte ..." rows="10" />
</InputsGroup>`;

export const checkbox = `<InputsGroup class="max-w-xs">
<InputsLabel class="text-gray-100">Titre</InputsLabel>
<InputsCheckbox v-model="isChecked" name="exampleCheckbox" />
</InputsGroup>`;

export const emailValue = `<InputsGroup class="max-w-xs">
<InputsLabel class="text-gray-100">Mail :</InputsLabel>
<InputsEmail label="Email Address" v-model="emailValue" />
</InputsGroup>`;

export const quantity = `<InputsGroup class="max-w-xs">
<InputsLabel class="text-gray-100">Number:</InputsLabel>
<InputsNumber label="Number" v-model="quantity" />
</InputsGroup>`;

export const radioGender  = `<InputsGroup class="max-w-xs">
<InputsLabel class="text-gray-100">Genre :</InputsLabel>
<InputsRadio label="Gender" v-model="radioGender" />
</InputsGroup>`;

export const selectedMedusa  = `<InputsGroup class="max-w-xs">
<InputsLabel class="text-gray-100">Shop, buying :</InputsLabel>
<InputsSelect id="medusas" label="medusas" v-model="selectedMedusa" />
</InputsGroup>`;

export const form = `<InputsForm>
  <InputsGroup class="max-w-xs">
    <InputsLabel name="nom">Nom</InputsLabel>
    <InputsTexte v-model="nom" name="nom" placeholder="Votre nom" />
  </InputsGroup>

  <InputsGroup class="max-w-xs">
    <InputsLabel name="prenom">Prénom</InputsLabel>
    <InputsTexte
      v-model="prenom"
      name="prenom"
      placeholder="Votre prénom"
    />
  </InputsGroup>

  <InputsGroup class="max-w-xs">
    <InputsLabel name="description">Description</InputsLabel>
    <InputsTextarea
      v-model="description"
      name="description"
      placeholder="Votre texte ..."
      rows="10"
    />
  </InputsGroup>
</InputsForm>`;
