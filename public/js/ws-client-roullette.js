const ws = function () {
    // assumes the socket.io client library is loaded in the HTML file
    const socket = io();

    // Emit the userConnected event when the user connects
    socket.emit('userConnected', { userId: document.querySelector(".emailholder").innerHTML, username: document.querySelector(".usernameholder").innerHTML, game: 'roulette'});

    // Listen for the updateUserList event to update the list of connected users
    socket.on('updateUserList', function (connectedUsers) {
        // Assuming connectedUsers is an array of user objects, update your UI accordingly
        document.querySelector("#counter").innerHTML = `Players at this table: ${Object.values(connectedUsers).filter(user => user.game === "roulette").length}`;
        // You can also update any other UI components based on the connectedUsers array
    });

    socket.on("disconnect", (reason) => {
        console.log(reason);
    });

    socket.on("individualMessage", (message) => {
        document.querySelector(".message").innerHTML = message;
    });

    socket.on("history", (message) => {
        const blackNumbers = [ 2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 29, 28, 31, 33, 35 ];
        const redNumbers = [ 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36 ];
        var htmltext = '<div class="roulette-history">';

        for (var i = 0; i < message.length; i++) {
            if (blackNumbers.includes(message[i])) {
                htmltext += "<span class='black'>" + message[i] + "</span>";
            }
            else if (redNumbers.includes(message[i])) {
                htmltext += "<span class='red'>" + message[i] + "</span>";
            }
            else {
                htmltext += "<span class='green'>" + message[i] + "</span>";
            }
        }

        htmltext += "</div>";
        
        document.querySelector(".history").innerHTML = htmltext;
    });

    socket.on("openbets", () => {
        // PLAY SOUND TO ALERT USERS THAT BETS ARE OPEN
        playSound("../music/Bets_Are_Open_Again.wav");
        console.log('Socket: Bets allowed.');
        Timer2Function();
    });
    
    socket.on("closebets", () => {
        // PLAY SOUND TO ALERT USERS THAT BETS ARE CLOSED
        playSound("../music/NoMoreBets.wav");
        console.log('Socket: Bets not allowed.');
        // Deactivate buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = true;
            button.classList.remove('active');
        });
        console.log('No more bets allowed.');
    
        socket.on("spun", ({number: number, angle: angle}) => {
            // PLAY SOUND TO ALERT USERS THAT THE WHEEL IS SPINNING 10 SECONDS LONG FAST TO SLOW
            playSound("../music/ball-spinning.wav");

            console.log('Socket: SPUN number is ' + number);
            try{
                const singleRotation = 360/37;

                const rouletteWheelNumbers = [ 
                    0, 32, 15, 19, 4, 21, 2, 25, 17,
                    34, 6, 27, 13, 36, 11, 30, 8, 23,
                    10, 5, 24, 16, 33, 1, 20, 14, 31,
                    9, 22, 18, 29, 7, 28, 12, 35, 3, 26
                ];

                function calculateDegreesRoulette(number) {
                    let degreesRoulette = 0;
                    for (let i = 0; i < rouletteWheelNumbers.length; i++) {
                      if (number == rouletteWheelNumbers[i]) {
                        degreesRoulette = i * singleRotation;
                      }
                    }
                    return degreesRoulette;
                  }

                  const imageContainer = document.querySelector('.image-container');
                const spinOne = document.getElementById('theSpinOne');
                const ballOne = document.getElementById('TheBallOne');

                const animationDuration = 10000; // Animation duration in milliseconds

                function animateRotation(element, startDegree, endDegree) {
                    const startTime = performance.now();
                  
                    function cubicBezierEase(t) {
                        const p0 = 0;    // Starting point
                        const p1 = 0.5;  // Initial acceleration
                        const p2 = 0.8;  // Initial deceleration
                        const p3 = 1;    // Ending point
                      
                        const exponentialFactor = 2.4;  // Adjust this for exponential effect
                      
                        const t1 = 1 - t;
                        return (
                          3 * p1 * t1 * t1 * t +
                          3 * p2 * t1 * t * t +
                          p3 * Math.pow(t, exponentialFactor)
                        );
                      }
                  
                    function updateRotation(currentTime) {
                      const elapsedTime = currentTime - startTime;
                      const progress = elapsedTime / animationDuration;
                  
                      if (progress < 1) {
                        const easingProgress = cubicBezierEase(progress);
                        const currentDegree = startDegree + (endDegree - startDegree) * easingProgress;
                  
                        element.style.transform = `rotate(${currentDegree}deg)`;
                  
                        requestAnimationFrame(updateRotation);
                      } else {
                        element.style.transform = `rotate(${endDegree}deg)`;
                      }
                    }
                  
                    requestAnimationFrame(updateRotation);
                  }
                  
                  console.log("RANDOM ANGLE: " + angle);
                const randomRotation = angle;
                const rawDegree = calculateDegreesRoulette(number);
                const degreesRoulette = rawDegree + 1080 + randomRotation;

                // Update CSS variable and animate rotation
                //document.documentElement.style.setProperty('--my-end-degree', `${-degreesRoulette}deg`);
                animateRotation(spinOne, 0, -degreesRoulette);

                // Update CSS variable for ball and animate rotation
                const rawDegreeBall = 360 - degreesRoulette;
                const degreesBall = (360 - randomRotation) + 1080;
                //document.documentElement.style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);
                animateRotation(ballOne, 0, degreesBall);

                //   const randomRotation = generateRandomRotation();
                //   const rawdegree = calculateDegreesRoulette(number);
                //     // document.getElementById("theSpinOne").style.transform = `rotate(${-degreesRoulette}deg)`;
                //     const degreesRoulette = rawdegree + 1080 + randomRotation ; 
                //     console.log("Degrees Roulette: " + -degreesRoulette);

                //     document.getElementById("theSpinOne").style.setProperty('--my-end-degree', `${-degreesRoulette}deg`);

                //     const rawdegreeBall = 360 - degreesRoulette; 
                //     console.log("Raw Degree Ball: " + rawdegreeBall); 

                //     const degreesBall = (360 - randomRotation) + 1080;
                //     // document.getElementsById("theBallOne").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);
                //     // document.getElementsByClassName("theSpinOne").style.setProperty('--my-end-degree-ball', `${degreesBall}deg`);
                //     document.documentElement.style .setProperty('--my-end-degree-ball', `${degreesBall}deg`);
                    
            }
            catch (err) {
                console.log(err);
            }

            
        });

        socket.on("spincalc", (number) => {
            if (number === 0) {
                playSound("../music/Numbers2/Number_0.wav");
            } else if (number === 1) {
                playSound("../music/Numbers2/Number_1.wav");
            } else if (number === 2) {
                playSound("../music/Numbers2/Number_2.wav");
            } else if (number === 3) {
                playSound("../music/Numbers2/Number_3.wav");
            } else if (number === 4) {
                playSound("../music/Numbers2/Number_4.wav");
            } else if (number === 5) {
                playSound("../music/Numbers2/Number_5.wav");
            } else if (number === 6) {
                playSound("../music/Numbers2/Number_6.wav");
            } else if (number === 7) {
                playSound("../music/Numbers2/Number_7.wav");
            } else if (number === 8) {
                playSound("../music/Numbers2/Number_8.wav");
            } else if (number === 9) {
                playSound("../music/Numbers2/Number_9.wav");
            } else if (number === 10) {
                playSound("../music/Numbers2/Number_10.wav");
            } else if (number === 11) {
                playSound("../music/Numbers2/Number_11.wav");
            } else if (number === 12) {
                playSound("../music/Numbers2/Number_12.wav");
            } else if (number === 13) {
                playSound("../music/Numbers2/Number_13.wav");
            } else if (number === 14) {
                playSound("../music/Numbers2/Number_14.wav");
            } else if (number === 15) {
                playSound("../music/Numbers2/Number_15.wav");
            } else if (number === 16) {
                playSound("../music/Numbers2/Number_16.wav");
            } else if (number === 17) {
                playSound("../music/Numbers2/Number_17.wav");
            } else if (number === 18) {
                playSound("../music/Numbers2/Number_18.wav");
            } else if (number === 19) {
                playSound("../music/Numbers2/Number_19.wav");
            } else if (number === 20) {
                playSound("../music/Numbers2/Number_20.wav");
            } else if (number === 21) {
                playSound("../music/Numbers2/Number_21.wav");
            } else if (number === 22) {
                playSound("../music/Numbers2/Number_22.wav");
            } else if (number === 23) {
                playSound("../music/Numbers2/Number_23.wav");
            } else if (number === 24) {
                playSound("../music/Numbers2/Number_24.wav");
            } else if (number === 25) {
                playSound("../music/Numbers2/Number_25.wav");
            } else if (number === 26) {
                playSound("../music/Numbers2/Number_26.wav");
            } else if (number === 27) {
                playSound("../music/Numbers2/Number_27.wav");
            } else if (number === 28) {
                playSound("../music/Numbers2/Number_28.wav");
            } else if (number === 29) {
                playSound("../music/Numbers2/Number_29.wav");
            } else if (number === 30) {
                playSound("../music/Numbers2/Number_30.wav");
            } else if (number === 31) {
                playSound("../music/Numbers2/Number_31.wav");
            } else if (number === 32) {
                playSound("../music/Numbers2/Number_32.wav");
            } else if (number === 33) {
                playSound("../music/Numbers2/Number_33.wav");
            } else if (number === 34) {
                playSound("../music/Numbers2/Number_34.wav");
            } else if (number === 35) {
                playSound("../music/Numbers2/Number_35.wav");
            } else if (number === 36) {
                playSound("../music/Numbers2/Number_36.wav");
            }

            Timer1Function();});

        });
    
        
    
        socket.on('redirect', function () {
            // Redirect to the "/login" page
            window.location.href = '/login';
        });
    }();
