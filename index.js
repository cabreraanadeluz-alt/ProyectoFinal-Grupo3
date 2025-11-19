document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelectorAll(".nav-btn");

  navBtns.forEach(btn => {

    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = btn.dataset.id;
      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  const buttonUrls = {
    'btn-dead-poets': 'https://www.rottentomatoes.com/m/dead_poets_society',
    'btn-truman-show': 'https://www.rottentomatoes.com/m/truman_show',
    'btn-forrest-gump': 'https://www.rottentomatoes.com/m/forrest_gump',
    'btn-persuit-happyness': 'https://www.rottentomatoes.com/m/pursuit_of_happyness',
    'btn-beautiful-mind': 'https://www.rottentomatoes.com/m/beautiful_mind',
    'btn-shawshank-redemption': 'https://www.rottentomatoes.com/m/shawshank_redemption',
    'btn-dune': 'https://www.rottentomatoes.com/search?search=dune',
    'btn-superman': 'https://www.rottentomatoes.com/m/superman_2025',
    'btn-interstellar': 'https://www.rottentomatoes.com/m/interstellar_2014',
    'btn-blade-runner': 'https://www.rottentomatoes.com/m/blade_runner_2049',
    'btn-inception': 'https://www.rottentomatoes.com/m/inception',
    'btn-matrix': 'https://www.rottentomatoes.com/m/matrix',
    'btn-freakier-friday': 'https://www.rottentomatoes.com/m/freakier_friday',
    'btn-mean-girls': 'https://www.rottentomatoes.com/m/mean_girls',
    'btn-the-intern': 'https://www.rottentomatoes.com/m/the_intern',
    'btn-the-proposal': 'https://www.rottentomatoes.com/m/10010458-proposal',
    'btn-10-things': 'https://www.rottentomatoes.com/m/10_things_i_hate_about_you',
    'btn-superbad': 'https://www.rottentomatoes.com/m/superbad',
    'btn-malefica': 'https://www.rottentomatoes.com/m/maleficent_2014',
    'btn-libro-selva': 'https://www.rottentomatoes.com/m/the_jungle_book_2016',
    'btn-alice-wonderland': 'https://www.rottentomatoes.com/m/1221547-alice_in_wonderland',
    'btn-mulan': 'https://www.rottentomatoes.com/m/mulan_2020',
    'btn-cenicienta': 'https://www.rottentomatoes.com/m/cinderella_2015',
    'btn-como-entrenar-dragon': 'https://www.rottentomatoes.com/m/how_to_train_your_dragon_2025',
    'btn-mision-imposible': 'https://www.rottentomatoes.com/m/mission_impossible_the_final_reckoning',
    'btn-john-wick': 'https://www.rottentomatoes.com/m/john_wick',
    'btn-gladiador': 'https://www.rottentomatoes.com/m/gladiator',
    'btn-dark-knight': 'https://www.rottentomatoes.com/m/the_dark_knight',
    'btn-kill-bill': 'https://www.rottentomatoes.com/m/kill_bill_vol_1',
    'btn-atomic-blonde': 'https://www.rottentomatoes.com/m/atomic_blonde_2017',
    'btn-el-conjuro': 'https://www.rottentomatoes.com/m/the_conjuring_last_rites',
    'btn-ruega-por-nosotros': 'https://www.rottentomatoes.com/m/the_unholy_2021',
    'btn-weapons': 'https://www.rottentomatoes.com/m/weapons',
    'btn-hereditary': 'https://www.rottentomatoes.com/m/hereditary',
    'btn-it': 'https://www.rottentomatoes.com/m/it_2017',
    'btn-insidious': 'https://www.rottentomatoes.com/m/insidious',

    'btn-cien-anos': 'https://www.goodreads.com/book/show/370523.Cien_a_os_de_soledad',
    'btn-casa-espiritus': 'https://www.goodreads.com/book/show/106192.La_casa_de_los_esp_ritus',
    'btn-pedro-paramo': 'https://www.goodreads.com/book/show/38787.Pedro_P_ramo',
    'btn-otono-patriarca': 'https://www.goodreads.com/book/show/761.El_oto_o_del_patriarca?ref=nav_sb_ss_1_13',
    'btn-pasos-perdidos': 'https://www.goodreads.com/book/show/71521.Los_pasos_perdidos?ac=1&from_search=true&qid=pOVRK9ZbwQ&rank=1',
    'btn-como-agua': 'https://www.goodreads.com/book/show/73716.Como_agua_para_chocolate-',
    'btn-don-quijote': 'https://www.goodreads.com/book/show/32765283-don-quijote-de-la-mancha?ac=1&from_search=true&qid=7UJpzo1rOb&rank=1',
    'btn-rayuela': 'https://www.goodreads.com/book/show/46171.Rayuela?from_search=true&from_srp=true&qid=myPv6BpzyG&rank=2',
    'btn-orgullo-prejuicio': 'https://www.goodreads.com/book/show/110815',
    'btn-matar-ruisenor': 'https://www.goodreads.com/book/show/40942650-matar-a-un-ruise-or',
    'btn-crimen-castigo': 'https://www.goodreads.com/book/show/103582.Crimen_y_castigo?ac=1&from_search=true&qid=ZYLXSXjWTo&rank=1',
    'btn-madame-bovary': 'https://www.goodreads.com/book/show/2175.Madame_Bovary',
    'btn-el-principito': 'https://www.goodreads.com/book/show/866618.El_principito?from_search=true&from_srp=true&qid=ORETw4AL9u&rank=1',
    'btn-rebelion-granja': 'https://www.goodreads.com/book/show/36043303-rebeli-n-en-la-granja?ac=1&from_search=true&qid=B2yU5hd8dT&rank=1',
    'btn-jonathan-seagull': 'https://www.goodreads.com/book/show/71728.Jonathan_Livingston_Seagull?ac=1&from_search=true&qid=SWkWZshoul&rank=2',
    'btn-el-alquimista': 'https://www.goodreads.com/book/show/45497.El_alquimista?ac=1&from_search=true&qid=BsmF0cnkHQ&rank=1',
    'btn-historia-interminable': 'https://www.goodreads.com/book/show/72029.La_historia_interminable?ac=1&from_search=true&qid=xOdv4mVybt&rank=1',
    'btn-el-oso': 'https://www.goodreads.com/book/show/24796412-el-oso-que-no-lo-era',
    'btn-la-odisea': 'https://www.goodreads.com/book/show/95534.La_Odisea?from_search=true&from_srp=true&qid=WO2coFa2Nx&rank=1',
    'btn-la-iliada': 'https://www.goodreads.com/book/show/601188.La_Il_ada?ac=1&from_search=true&qid=tiFxgojCsy&rank=1',
    'btn-beowulf': 'https://www.goodreads.com/book/show/52357.Beowulf?ac=1&from_search=true&qid=JFjke9GZxV&rank=1',
    'btn-la-eneida': 'https://www.goodreads.com/book/show/1111471.La_Eneida?from_search=true&from_srp=true&qid=JFjke9GZxV&rank=1',
    'btn-mio-cid': 'https://www.goodreads.com/book/show/41543137-el-cantar-de-m-o-cid?ac=1&from_search=true&qid=PfPYiKpw1W&rank=2',
    'btn-gilgamesh': 'https://www.goodreads.com/book/show/73376.The_Epic_of_Gilgamesh',
    'btn-dracula': 'https://www.goodreads.com/book/show/17245.Dracula?from_search=true&from_srp=true&qid=9xPMANXlqn&rank=1',
    'btn-the-shining': 'https://www.goodreads.com/book/show/897708.The_Shining',
    'btn-cuentos-macabros': 'https://www.goodreads.com/book/show/12952578-cuentos-macabros',
    'btn-frankenstein': 'https://www.goodreads.com/search?q=Frankenstein&ref=nav_sb_noss_l_12',
    'btn-dejame-entrar': 'https://www.goodreads.com/book/show/943402.L_t_den_r_tte_komma_in',
    'btn-el-ritual': 'https://www.goodreads.com/book/show/15749353-the-ritual',
    'btn-1984': 'https://www.goodreads.com/book/show/40961427-1984',
    'btn-fahrenheit-451': 'https://www.goodreads.com/book/show/17470674-fahrenheit-451',
    'btn-tres-cuerpos': 'https://www.goodreads.com/book/show/2051888.The_Three_Body_Problem',
    'btn-neuromancer': 'https://www.goodreads.com/book/show/22328.Neuromancer',
    'btn-solaris': 'https://www.goodreads.com/book/show/95558.Solaris',
    'btn-parabola-sembrador': 'https://www.goodreads.com/book/show/52397.Parable_of_the_Sower',
    'btn-juego-de-tronos': 'https://www.goodreads.com/book/show/1453612.Juego_de_tronos',
    'btn-senor-anillos': 'https://www.goodreads.com/book/show/34.The_Fellowship_of_the_Ring',
    'btn-harry-potter': 'https://www.goodreads.com/book/show/3.Harry_Potter_and_the_Sorcerer_s_Stone',
    'btn-nombre-viento': 'https://www.goodreads.com/book/show/6483211-el-nombre-del-viento',
    'btn-brujula-dorada': 'https://www.goodreads.com/book/show/119322.La_Br_jula_Dorada',
    'btn-el-hobbit': 'https://www.goodreads.com/book/show/227221.El_hobbit'
  };

  Object.entries(buttonUrls).forEach(([btnId, url]) => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(url, '_blank');
      });
    }
  });

});