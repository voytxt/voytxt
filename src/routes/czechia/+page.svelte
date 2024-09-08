<h1><span class="green">Czechia</span> is in <span class="blue">Central Europe</span>!</h1>

<main>
  <h2>
    <div class="green">Czechia ✅</div>
    <div class="green">The Czech Republic ✅</div>
    <div class="red">Czechoslovakia ❌</div>
    <div class="red">Chechnya ❌</div>
    <div class="red">Bohemia ❌</div>
  </h2>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5283158.680158322!2d10.988618292113015!3d49.71706447082004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948fd7dd8243%3A0xf8661c75d3db586f!2sCzechia!5e0!3m2!1sen!2scz!4v1652629940756!5m2!1sen!2scz"
    title="Czechia on Google Maps"
  ></iframe>
</main>

<svelte:head>
  <title>Czechia | voytxt</title>
  <meta name="description" content="Wait, sorry, what's Czechia? You mean Chechnya?" />
</svelte:head>

<style>
  h1 {
    text-align: center;
    font-size: 4rem;
    margin: 4rem;
  }

  main {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: max-content;
    gap: 2rem;
  }

  main h2 {
    text-align: right;
    font-size: 3rem;
  }

  main iframe {
    border: none;
    width: 600px;
    height: 450px;
  }

  .red {
    color: #f43f5e;
  }

  .green {
    color: #22c55e;
  }

  .blue {
    color: #3b82f6;
  }

  @media screen and (width < 1440px) {
    h1 {
      font-size: 3rem;
    }

    main h2 {
      font-size: 2rem;
    }
  }

  @media screen and (width < 1024px) {
    main iframe {
      width: 300px;
      height: 400px;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 2rem;
      margin: 2rem;
    }

    main {
      flex-direction: column;
    }

    main h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    main iframe {
      width: 90vw;
      height: 300px;
    }
  }
</style>
