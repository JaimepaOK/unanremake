<template>
  <div>
    <div id="cards">
      
        <b-card
          img-src=""
          img-alt="Card image"
          img-bottom
          title="Reseña Histórica - Fundación de la Universidad de León, Nicaragua -
          UNAN León"
        >
          <b-card-text
            ><b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/fJbKqC09R9c"
              allowfullscreen
            ></b-embed>
          </b-card-text>
        </b-card>
     
    </div>
  </div>
</template>

<style scoped>
#cards{
  display: flex;
  align-items: center;
  justify-content: center;
}
#cards .card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 50%;
  word-wrap: break-word;
  text-align: center;
  background-color: #eeee;
  background-clip: border-box;
  border: 0 px solid rgba(255, 255, 255, 0);
  border-radius: 0.25 rem;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>