    // DOM Elements
    const quizData = {
        easy: [
            { question: "What is customer journey mapping?", options: ["A way to design marketing campaigns", "A visual representation of customer interactions with a business", "A method to track employee performance", "A financial strategy for startups"], answer: 1 },
            { question: "Which of these is NOT a benefit of customer journey mapping?", options: ["Understanding customer pain points", "Reducing operational costs directly", "Enhancing customer experience", "Aligning team goals"], answer: 1 },
            { question: "What are customer journey maps primarily used to identify?", options: ["Competitors' weaknesses", "Customer needs and pain points", "The best sales tactics", "Employee engagement levels"], answer: 1 },
            { question: "What is a 'touchpoint' in the customer journey?", options: ["A customer’s review of a product", "A point where a customer interacts with a business", "The final step in making a purchase", "A social media post by the business"], answer: 1 },
            { question: "Which stage of the customer journey typically comes first?", options: ["Retention", "Awareness", "Purchase", "Consideration"], answer: 1 },
            { question: "How can startups collect data for customer journey mapping?", options: ["Conducting surveys and interviews", "Monitoring competitors' ads", "Buying customer databases", "Creating fictional personas without research"], answer: 0 },
            { question: "Which of these is an example of a pain point?", options: ["Customer easily completes checkout", "Customer gets stuck during onboarding", "Customer receives a discount code", "Customer shares a positive review"], answer: 1 },
            { question: "Why is it important for startups to use customer journey mapping?", options: ["To allocate resources effectively", "To hire more employees", "To raise product prices", "To replace team leaders"], answer: 0 },
            { question: "What is the primary goal of optimizing the customer journey?", options: ["Increasing customer churn", "Improving customer satisfaction and loyalty", "Reducing touchpoints to a minimum", "Competing on price alone"], answer: 1 },
            { question: "Which of these stages is part of a typical customer journey?", options: ["Discovery", "Onboarding", "Retention", "All of the above"], answer: 3 }
        ],
        medium: [
            { question: "What is the primary purpose of identifying 'emotional states' in customer journey mapping?", options: ["To evaluate customer purchasing power", "To create ads that target emotions", "To understand how customers feel at each touchpoint", "To train employees in emotional intelligence"], answer: 2 },
            { question: "Which of the following factors is most important when prioritizing touchpoints in a journey map?", options: ["The number of employees managing the touchpoint", "The potential impact on customer satisfaction", "The cost of maintaining the touchpoint", "The time it takes to implement changes"], answer: 1 },
            { question: "What is the main challenge for startups in creating accurate customer journey maps?", options: ["Lack of creativity in designing maps", "Limited access to comprehensive customer data", "Difficulty in defining financial goals", "Over-reliance on internal feedback"], answer: 1 },
            { question: "How can startups validate the insights gained from their customer journey map?", options: ["By comparing them with industry trends", "By testing with real customers and analyzing feedback", "By sharing the map with competitors for review", "By using it to predict sales without further testing"], answer: 1 },
            { question: "Why is it important to map post-purchase stages in a customer journey?", options: ["To ensure repeat purchases and build customer loyalty", "To reduce marketing costs", "To identify competitors’ strategies", "To minimize the workload of customer support teams"], answer: 0 },
            { question: "What is one key difference between a customer journey map and a sales funnel?", options: ["Journey maps focus only on pre-purchase behavior, while funnels include post-purchase", "Journey maps focus on customer emotions, while funnels track conversion rates", "Funnels are visual, while journey maps are text-based", "Funnels are created for marketing teams, while journey maps are for CEOs"], answer: 1 },
            { question: "Which of the following is a proactive use of customer journey maps for startups?", options: ["Predicting potential roadblocks in customer onboarding", "Solving problems after customer complaints arise", "Tracking employee performance at touchpoints", "Increasing revenue by reducing product features"], answer: 0 },
            { question: "What is the primary role of 'personas' in customer journey mapping?", options: ["To identify potential investors for the startup", "To represent the different types of customers interacting with the business", "To track team progress on customer satisfaction goals", "To document the startup's product roadmap"], answer: 1 },
            { question: "How can startups measure the effectiveness of changes made using a journey map?", options: ["By tracking customer engagement metrics at key touchpoints", "By reducing the number of journey stages", "By increasing marketing budgets for each stage", "By focusing only on loyal customers"], answer: 0 },
            { question: "What does a detailed 'consideration' stage in the journey map typically focus on?", options: ["Highlighting product reviews, comparisons, and decision-making support", "Ensuring the product delivery process is seamless", "Providing post-purchase customer service", "Building relationships with competitors"], answer: 0 }
        ],
        hard: [
            { question: "Which of the following frameworks is most aligned with analyzing the customer’s decision-making journey in mapping?", options: ["The Eisenhower Matrix", "The AIDA model (Awareness, Interest, Desire, Action)", "The SWOT Analysis", "The Moore’s Law Framework"], answer: 1 },
            { question: "When analyzing a customer journey, what is the most effective way to measure 'micro-moments'?", options: ["By identifying the points where customers make split-second decisions", "By mapping long-term brand loyalty trends", "By reviewing the average lifetime value (LTV) of a customer", "By tracking monthly recurring revenue (MRR)"], answer: 0 },
            { question: "In a customer journey map, what does 'moment of truth' refer to?", options: ["A stage where customers interact with competitors", "A critical interaction that significantly influences the customer’s perception of a brand", "The final decision point before a purchase", "A post-purchase touchpoint that ensures loyalty"], answer: 1 },
            { question: "What role do 'emotion curves' play in an advanced customer journey map?", options: ["They visually represent the customer's emotional state at each stage of the journey", "They map customer satisfaction levels against competitors", "They measure the effectiveness of marketing campaigns", "They represent product performance feedback"], answer: 0 },
            { question: "What is the biggest challenge in integrating omnichannel touchpoints into a customer journey map?", options: ["Ensuring consistency in brand messaging across channels", "Managing customer feedback", "Reducing the number of digital interactions", "Eliminating physical interactions entirely"], answer: 0 },
            { question: "How can startups incorporate predictive analytics into customer journey mapping?", options: ["By using historical data to forecast customer behavior at each stage", "By relying on manual customer feedback", "By prioritizing the highest revenue-generating customer segment", "By analyzing competitor journey maps"], answer: 0 },
            { question: "Which of the following is a sign that a customer journey map lacks depth?", options: ["It focuses exclusively on one type of customer persona", "It includes touchpoints across multiple platforms", "It identifies pain points but excludes solutions", "It uses advanced data visualization tools"], answer: 2 },
            { question: "In complex customer journeys, how do 'multi-touch attribution models' enhance journey mapping?", options: ["By identifying the primary touchpoint responsible for conversions", "By assigning value to multiple touchpoints that influence customer decisions", "By reducing the time spent on mapping post-purchase stages", "By focusing on the last interaction before a purchase"], answer: 1 },
            { question: "How does incorporating real-time data enhance the effectiveness of a customer journey map?", options: ["It allows businesses to immediately adjust touchpoints based on current trends", "It eliminates the need for historical customer data", "It reduces the complexity of creating personas", "It focuses on qualitative insights rather than quantitative ones"], answer: 0 },
            { question: "What distinguishes an 'experience-first' journey map from a traditional one?", options: ["It emphasizes customer emotions and memories over linear stages", "It excludes measurable business outcomes", "It focuses solely on digital touchpoints", "It prioritizes employee experiences over customer interactions"], answer: 0 }
        ]
    };     
    
    
    const loginSection = document.getElementById('loginSection');
    const modeSection = document.getElementById('modeSection');
    const quizSection = document.getElementById('quizSection');
    const loginButton = document.getElementById('login-button');
    const loginForm = document.getElementById('login-form');
    const errorElement = document.getElementById('loginError');
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    let currentMode = null;
    let currentQuestionIndex = 0;
    let selectedAnswers = [];
    
  /*  // Login Handler
    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        if (username === 'admin' && password === 'password') {
            loginSection.style.display = 'none';
            modeSection.style.display = 'block';
            errorElement.textContent = '';
        } else {
            errorElement.textContent = 'Invalid credentials. Please try again.';
        }
    });*/
    
    // Mode Selection Handlers
    ['easy', 'medium', 'hard'].forEach(mode => {
        document.getElementById(`${mode}ModeButton`).addEventListener('click', () => {
            currentMode = mode;
            modeSection.style.display = 'none';
            quizSection.style.display = 'block';
            currentQuestionIndex = 0;
            selectedAnswers = new Array(quizData[mode].length).fill(null);
            displayQuiz();
        });
    });
    
    // Display Current Question
    function displayQuiz() {
        const quizTitle = document.getElementById('quizTitle');
        const quizContent = document.getElementById('quizContent');
    
        quizTitle.textContent = `${currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Quiz`;
        quizContent.innerHTML = '';
    
        const question = quizData[currentMode][currentQuestionIndex];
    
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p style="font-size: 20px; font-weight: bold; color:#f2d7d5;">${currentQuestionIndex + 1}. ${question.question}</p>
            <div class="options">
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question" value="${i}" ${selectedAnswers[currentQuestionIndex] === i ? 'checked' : ''}>
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
    
        quizContent.appendChild(questionDiv);
    
        // Button Visibility Handling
        prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
        nextBtn.style.display = currentQuestionIndex < quizData[currentMode].length - 1 ? 'inline-block' : 'none';
        submitBtn.style.display = currentQuestionIndex === quizData[currentMode].length - 1 ? 'inline-block' : 'none';
    }
    
    // Capture Answer Selection
    function saveAnswer() {
        const selected = document.querySelector(`input[name="question"]:checked`);
        selectedAnswers[currentQuestionIndex] = selected ? parseInt(selected.value) : null;
    }
    
    // Navigation Handlers
    prevBtn.addEventListener('click', () => {
        saveAnswer();
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuiz();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        saveAnswer();
        if (currentQuestionIndex < quizData[currentMode].length - 1) {
            currentQuestionIndex++;
            displayQuiz();
        }
    });
    
    // Submit Quiz
    submitBtn.addEventListener('click', () => {
        saveAnswer();
    
        if (selectedAnswers.includes(null)) {
            alert('Answer all questions to complete your quest!');
            return;
        }
    
        const questions = quizData[currentMode];
        const score = selectedAnswers.reduce((acc, answer, index) => {
            return acc + (answer === questions[index].answer ? 1 : 0);
        }, 0);
    
        alert(`You have completed your quiz with ${score} out of ${questions.length}. Congratulations!`);
    
        // Reset to mode selection
        quizSection.style.display = 'none';
        modeSection.style.display = 'block';
    });