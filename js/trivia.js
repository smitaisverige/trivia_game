$(() => {

  const harrypotterQuestions = [
    {
      question: "Which of the following wizards was one of the founders of Hogwarts?",
      options: ["A: Rowena Ravenclaw", "B: Newt Scamander", "C: Severus Snape", "D: Albus Dumbledore"],
      answer: "A"
    },
    {
      question: "What spell is used to disarm another wizard?",
      options: ["A: Alohomora", "B: Wingardium Leviosa", "C: Expelliarmus", "D: Expecto Patronum"],
      answer: "C"
    },
    {
      question: "When was the first Harry Potter book published?",
      options: ["A: 1996", "B: 1997", "C: 1995", "D: 1998"],
      answer: "B"
    },
    {
      question: "What is the name of the candy store near Hogwarts?",
      options: ["A: Honeydukes", "B: Olivanders", "C: Flourish and Blotts", "D: Harrods"],
      answer: "A"
    },
    {
      question: "Which spell did Harry use to kill Lord Voldemort?",
      options: ["A: Avada Kedavra", "B: Cruciatus Curse", "C: Stupefy", "D: Expelliarmus"],
      answer: "D"
    },
    {
      question: "What is the name of Ron's owl ?",
      options: ["A: Hedwig", "B: Errol", "C: Pigwidgeon", "D: Hermes"],
      answer: "C"
    },
    {
      question: "What speciality is Minerva McGonagall a professor of?",
      options: ["A: Charms", "B: Potions", "C: Herbology", "D: Transfiguration"],
      answer: "D"
    }
  ];

  const dcQuestions = [
    {
      question: "What is the name of the city where Batman operates?",
      options: ["A: Central City", "B: Gotham City", "C: Metropolis", "D: Star City"],
      answer: "B"
    },
    {
      question: "What is Superman's Kryptonian name?",
      options: ["A: Bruce Wayne", "B: Kal-El", "C: Barry Allen", "D: Hal Jordan"],
      answer: "B"
    },
    {
      question: "What is the Green Lantern’s power ring called?",
      options: ["A: Invisibility Ring", "B: Speed Ring", "C: Teleportation Ring", "D: Power Ring"],
      answer: "D"
    },
    {
      question: "Who is the Flash's arch-nemesis?",
      options: ["A: Brainiac", "B: Doomsday", "C: The Reverse Flash", "D: Darkseid"],
      answer: "C"
    },
    {
      question: "What does the 'DC' in DC Comics stand for?",
      options: ["A: Detective Comics", "B: Danger Comics", "C: Dynamic Characters", "D: Daring Comics"],
      answer: "A"
    },
    {
      question: "Which superhero has a magic lasso and bulletproof bracelets?",
      options: ["A: Aquaman", "B: Superman", "C: The Wonder Woman", "D: The Flash"],
      answer: "C"
    },
    {
      question: "What is the name of Batman’s butler?",
      options: ["A: Alfred Pennyworth", "B: James Gordon", "C: Thomas Wayne", "D: Richard Grayson"],
      answer: "A"
    }
  ];

  const marvelQuestions = [
    {
      question: "Who is Iron Man?",
      options: ["A: Steve Rogers", "B: Tony Stark", "C: Bruce Banner", "D: Peter Parker"],
      answer: "B"
    },
    {
      question: "What is Thor's weapon?",
      options: ["A: Shield", "B: Sword", "C: Hammer", "D: Bow"],
      answer: "C"
    },
    {
      question: "Who is the villain in Avengers: Infinity War?",
      options: ["A: Loki", "B: Ultron", "C: Red Skull", "D: Thanos"],
      answer: "D"
    },
    {
      question: "Which hero turns green when angry?",
      options: ["A: Spider-Man", "B: Hulk", "C: Ant-Man", "D: Doctor Strange"],
      answer: "B"
    },
    {
      question: "Who leads the Avengers?",
      options: ["A: Captain America", "B: Black Widow", "C: Iron Man", "D: Hawkeye"],
      answer: "A"
    },
    {
      question: "Which metal is in Captain America’s shield?",
      options: ["A: Titanium", "B: Vibranium", "C: Adamantium", "D: Silver"],
      answer: "B"
    },
    {
      question: "What is the motto of Wakanda?",
      options: ["A: Wakanda Forever", "B: Longlive Black Panther", "C: Wakanda For Life", "D: For Wakanda"],
      answer: "A"
    }
  ];

  const disneyQuestions = [
    {
      question: "Who is the villain in Sleeping Beauty?",
      options: ["A: Maleficent", "B: Ursula", "C: Gothel", "D: Medusa"],
      answer: "A"
    },
    {
      question: "What is Simba’s father's name?",
      options: ["A: Loki", "B: Scar", "C: Mufasa", "D: Sarabi"],
      answer: "C"
    },
    {
      question: "What is the snowman’s name in Frozen?",
      options: ["A: Snowman", "B: Olaf", "C: Snowy", "D: Sven"],
      answer: "B"
    },
    {
      question: "What is the rabbit police officer's name in Zootopia?",
      options: ["A: Judy Hopps", "B: Judy Clawhouser", "C: Judy Wilde", "D: Judy Hopper"],
      answer: "A"
    },
    {
      question: "What is Rapunzel’s chameleon’s name?",
      options: ["A: Romeo", "B: Flynn", "C: Pascal", "D: Maximus"],
      answer: "C"
    },
    {
      question: "Who helps Nemo’s dad find him?",
      options: ["A: Marlin", "B: Gill", "C: Nigel", "D: Dory"],
      answer: "D"
    },
    {
      question: "What is Timon and Pumbaa’s motto?",
      options: ["A: Circle of Life", "B: Hakuna Matata", "C: No Worries", "D: Live Life"],
      answer: "B"
    }
  ];

  const starwarsQuestions = [
    {
      question: "Who is Darth Vader’s Jedi Master?",
      options: ["A: Obi-Wan Kenobi", "B: Qui-Gon Jin", "C: Darth Sidious", "D: Yoda"],
      answer: "D"
    },
    {
      question: "What substance freezes Han Solo?",
      options: ["A: Ice", "B: Liquid Nitrogen", "C: Carbonite", "D: Cryo Stasis"],
      answer: "C"
    },
    {
      question: "What is Boba Fett’s ship called?",
      options: ["A: The Falcon", "B: Slave I", "C: The Ghost", "D: The Millennium Falcon"],
      answer: "B"
    },
    {
      question: "Who built C-3PO?",
      options: ["A: Obi-Wan Kenobi", "B: Padme Amidala", "C: Anakin Skywalker", "D: R2-D2"],
      answer: "C"
    },
    {
      question: "What species helped Rebels on Endor?",
      options: ["A: Jawas", "B: Gungans", "C: Twi'leks", "D: Ewoks"],
      answer: "D"
    },
    {
      question: "What desert planet did Anakin and Luke grow up on?",
      options: ["A: Hoth", "B: Tatooine", "C: Jakku", "D: Coruscant"],
      answer: "B"
    },
    {
      question: "What is Baby Yoda’s real name?",
      options: ["A: Grogu", "B: Yoda Jr.", "C: Din Djarin", "D: Luke"],
      answer: "A"
    }
  ];

  const categories = [harrypotterQuestions, dcQuestions, marvelQuestions, disneyQuestions, starwarsQuestions];
  const categoryNames = ["Harry Potter Universe", "DC Universe", "Marvel Universe", "Disney Universe", "Star Wars Universe"];

/*   DOM ELEMENTS  */
  const startContainer = document.querySelector(".start-container");
  const quizContainer = document.querySelector(".quiz-container");
  const resultContainer = document.querySelector(".result-container");

  const player1NameInput = document.querySelector(".player1-name");
  const player2NameInput = document.querySelector(".player2-name");

  const welcomeEl = document.querySelector(".welcome-message");
  const turnMessageEl = document.querySelector(".turn-message");
  const questionEl = document.querySelector(".question");
  const optionsEl = document.querySelector(".options");

  const scoreEl = document.querySelector(".score");
  const titleMessageEl = document.querySelector(".title-message");
  const statsEl = document.querySelector(".session-stats");

  const timerEl = document.querySelector(".timer");
  const feedbackEl = document.querySelector(".feedback");


  /*  GAME STATE  */
  let currentCategory = [];
  let currentCategoryName = "";
  let currentQuestionIndex = 0;
  let player1Name = "";
  let player2Name = "";
  let player1Score = 0;
  let player2Score = 0;
  let currentPlayer = 1;
  let timer = null;
  let timeLeft = 120;
  let gamesPlayed = 0;
  let player1Wins = 0;
  let player2Wins = 0;
  let ties = 0;
  let startingPlayer = 1;

  function getRandomFive(questions) {
    const shuffled = Array.from(questions).sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6); // changing to 6 for equal questions to each player
  }

  /*  CATEGORY SELECTION  */
  document.querySelectorAll(".category-images img").forEach(img => {
    img.addEventListener("click", () => {
      const name1 = player1NameInput.value.trim();
      const name2 = player2NameInput.value.trim();
// need 2 players
      if (!name1 || !name2) {
        alert("Please enter both player names!");
        return;
      }

      document.querySelectorAll(".category-images img").forEach(i => i.classList.remove("selected"));
      img.classList.add("selected");

      player1Name = name1.toUpperCase();
      player2Name = name2.toUpperCase();
      currentPlayer = startingPlayer;

      const catIndex = img.id.replace("cat", "");
      currentCategory = getRandomFive(categories[catIndex]);
      currentCategoryName = categoryNames[catIndex];
      currentQuestionIndex = 0;

      startContainer.style.display = "none";
      quizContainer.style.display = "block";

      welcomeEl.innerHTML = `Welcome <span class="player1-text">${player1Name}</span> & 
                             <span class="player2-text">${player2Name}</span>! 🎬`;

      startTimer();
      showQuestion();
    });
  });

  function showQuestion() {
    const q = currentCategory[currentQuestionIndex];
    questionEl.textContent = `📚 ${currentCategoryName} - Q${currentQuestionIndex + 1}: ${q.question}`;

    turnMessageEl.innerHTML = currentPlayer === 1
      ? `🎯 Turn: <span class="player1-text">${player1Name}</span>`
      : `🎯 Turn: <span class="player2-text">${player2Name}</span>`;

    optionsEl.innerHTML = "";
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = opt;
      btn.addEventListener("click", () => selectAnswer(opt[0]));
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(answer) {
    const correct = currentCategory[currentQuestionIndex].answer;

    if (answer === correct) {
      feedbackEl.innerHTML = `<span class="correct">✔ Correct!</span>`;
      currentPlayer === 1 ? player1Score++ : player2Score++; 
    } else {
      const correctText = currentCategory[currentQuestionIndex].options
        .find(o => o.startsWith(correct));

      feedbackEl.innerHTML = `<span class="wrong">❌ Wrong! Correct answer: ${correctText}</span>`;
    }

    // Disable buttons
    Array.from(optionsEl.children).forEach(button => button.disabled = true);

    // Move to next question after delay
    setTimeout(() => {
      feedbackEl.innerHTML = ""; // clear message
      currentQuestionIndex++;
      currentPlayer = currentPlayer === 1 ? 2 : 1;

      if (currentQuestionIndex < currentCategory.length) {
        showQuestion();
      } else {
        showResults();
      }
    }, 1000);
  }

  /* SHOW RESULTS   */
  function showResults() {
    clearInterval(timer);
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    scoreEl.textContent = `🧠 ${player1Name}: ${player1Score} | ${player2Name}: ${player2Score}`;

    let resultMsg = "";
    if (player1Score > player2Score) {
      resultMsg = `${player1Name} 🏆 Wins!`;
      player1Wins++;
    } else if (player2Score > player1Score) {
      resultMsg = `${player2Name} 🏆 Wins!`;
      player2Wins++;
    } else {
      resultMsg = `It's a Tie! 🤝`;
      ties++;
    }

    titleMessageEl.textContent = resultMsg;
    gamesPlayed++;
    statsEl.textContent = `📊 Games Played: ${gamesPlayed} | ${player1Name} Wins: ${player1Wins} | ${player2Name} Wins: ${player2Wins} | Ties: ${ties}`;
    startingPlayer = startingPlayer === 1 ? 2 : 1;
    /*if (startingPlayer === 1) {
      startingPlayer = 2;
    } else { 
      startingPlayer = 1;
    }  */

  }

  /* TIMER  */
  function startTimer() {
    timeLeft = 120;
    updateTimer();
    timer = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResults();
      }
    }, 1000);
  }

  function updateTimer() {
    timerEl.textContent = `⏱ Time Left: ${formatTime(timeLeft)}`;
  }

  function formatTime(sec) {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  /*  PLAY AGAIN / HOME  */
  document.querySelector(".play-again-btn").addEventListener("click", () => {
    resultContainer.style.display = "none";
    startContainer.style.display = "block";
  });

  document.querySelector(".home-btn").addEventListener("click", () => {
    resultContainer.style.display = "none";
    quizContainer.style.display = "none";
    startContainer.style.display = "block";

    player1NameInput.value = "";
    player2NameInput.value = "";
    document.querySelectorAll(".category-images img").forEach(i => i.classList.remove("selected"));
  });

 /*   play music  */
  const music = document.getElementById("introMusic");

  function startIntroMusic() {
    music.volume = 1.0;
    music.play().catch(() => {
      // If blocked, wait for user click
      document.addEventListener("click", enableMusicOnClick);
    });
  }
// to stop the music from playng on multiple clicks 
  function enableMusicOnClick() {
    music.play().catch(() => {});
    document.removeEventListener("click", enableMusicOnClick);
  }

  startIntroMusic();
  music.play();
  // Stop after 30 seconds
 setTimeout(() => {
  music.pause();
  music.currentTime = 0;   // reset back to the start (optional)
 }, 30000);


  /*   OVERLAY ANIMATION (sync with music)*/
  $(".overlay").delay(3000).fadeOut();

  setTimeout(() => $(".overlay").html("<span>Welcome</span>"), 300);
  setTimeout(() => $(".overlay").html("<span>To</span>"), 800);
  setTimeout(() => $(".overlay").html("<span>The</span>"), 1300);
  setTimeout(() => $(".overlay").html("<span>Trivia</span>"), 1800);
  setTimeout(() => $(".overlay").html("<span>Universe!</span>"), 2300);

});
