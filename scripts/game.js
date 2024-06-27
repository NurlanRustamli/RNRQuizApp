const question = document.getElementById("question")
const choices = Array.from(document.getElementsByClassName("choice-text"))
const progressText = document.getElementById("progressText")
const scoreText = document.getElementById("score")
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {}
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        "id": 0,
        "question": "What problems may be observed during emotional blindness symptom?",
        "choice1": "appreciating the emotional meaning of events",
        "choice2": "appreciating the intellectual meaning of events",
        "choice3": "difficulty in self awareness",
        "choice4": "diffuculty in analytical thinking"
    },
    {
        "id": 1,
        "question": "Erikson focused on the root of the problem in this treatment method.",
        "choice1": "Solution-Focused Therapy",
        "choice2": "lifting the symptom",
        "choice3": "the role of subconsiuos",
        "choice4": "the use of brief theory"
    },
    {
        "id": 2,
        "question": "In which technique, Milton believed “lift the handle, a lot could be done with the pot”",
        "choice1": "lifting the symptom",
        "choice2": "hypnosis",
        "choice3": "the role of subconsiuos",
        "choice4": "the use of brief theory"
    },
    {
        "id": 3,
        "question": "By this technique Erickson didn’t see insight as the cause of problem.",
        "choice1": "the role of subconsiuos",
        "choice2": "erickson handshake",
        "choice3": "the use of brief theory",
        "choice4": "family therapy"
    },
    {
        "id": 4,
        "question": "Due to this techniques used by Erikson, psychologists could be fired.",
        "choice1": "hypnosis",
        "choice2": "the use of brief theory",
        "choice3": "erickson handshake",
        "choice4": "family therapy"
    },
    {
        "id": 5,
        "question": "Some of the followings may not be implications of self awareness?",
        "choice1": "decline the emotional intelligence",
        "choice2": "know about your weaknesses",
        "choice3": "better understand of a problem",
        "choice4": "give directions to your efforts"
    },
    {
        "id": 6,
        "question": "which way can we take in accepting our weaknesses?",
        "choice1": "look for the advantages of our weaknesses",
        "choice2": "to show our weaknesses like our strenghts",
        "choice3": "ignore the weaknesses",
        "choice4": "look for the disadvantages of our weaknesses"
    },
    {
        "id": 7,
        "question": "What can you get by comparing yourself with others?",
        "choice1": "Answers 1, 2, 3",
        "choice2": "3. it gives information about our progress",
        "choice3": "2. it gives motivation",
        "choice4": "1. it may enable growth"
    },
    {
        "id": 8,
        "question": "In which case comparison with others is not considered true?",
        "choice1": "if it makes you feel jealous",
        "choice2": "if it helps you to realize yourself",
        "choice3": "if it motivates you",
        "choice4": "if it improves you"
    },
    {
        "id": 9,
        "question": "When dealing with _______, we realize that some of our behaviors come from childhood.",
        "choice1": "self analysis",
        "choice2": "self-observation",
        "choice3": "self-comparison",
        "choice4": "self-motivation"
    },
    {
        "id": 10,
        "question": "You don't need to do one of the following during the self-observation phase.",
        "choice1": "judge yourself",
        "choice2": "be objective about yourself",
        "choice3": "ask yourself some questions",
        "choice4": "observe your reactions"
    },
    {
        "id": 11,
        "question": "Overall, why should people care about self-awareness?",
        "choice1": "to manage the life better",
        "choice2": "to live with excitement",
        "choice3": "to become wealthy",
        "choice4": "to please others"
    },
    {
        "id": 12,
        "question": "What does it mean if we base our decisions on facts rather than emotions?",
        "choice1": "we have improved our external self-awareness",
        "choice2": "we have improved our external self-evaluation",
        "choice3": "we have improved our internal self-awareness",
        "choice4": "we have improved our internal self-evaluation"
    },
    {
        "id": 13,
        "question": "If a person can empathize well and understand other people's points of view better, what is better developed in this person?",
        "choice1": "external self-awareness",
        "choice2": "external-self-evaluation",
        "choice3": "internal self-evaluation",
        "choice4": "internal-self awareness"
    },
    {
        "id": 14,
        "question": "By improving __________ people may upgrade the quality of life and manage their problems easier.",
        "choice1": "self-awareness",
        "choice2": "self-motivation",
        "choice3": "self-education",
        "choice4": "self-evaluation"
    },
    {
        "id": 15,
        "question": "Which of the following is a benefit of external self-awareness?",
        "choice1": "It helps you recognize when someone else has similar personality traits",
        "choice2": "It helps you become more aware of your own feelings and emotions",
        "choice3": "It helps you be less empathetic towards others",
        "choice4": "It helps you make decisions based on assumptions rather than facts"
    },
    {
        "id": 16,
        "question": "Which of the following is a major component of practicing self-control according to the passage?",
        "choice1": "Using standards to evaluate and determine whether we are making the right choices",
        "choice2": "Ignoring our inner self and acting without any thought or reflection",
        "choice3": "Focusing on our thoughts, feelings and actions without any evaluation",
        "choice4": "Comparing ourselves to others to judge our thoughts and behaviors"
    },
    {
        "id": 17,
        "question": "Why do you need to become more self-aware?",
        "choice1": "To control your own life",
        "choice2": "To engage in meaningless activities",
        "choice3": "To let situations lead you",
        "choice4": "To be in unconscious states"
    },
    {
        "id": 18,
        "question": "What are the benefits of external self-awareness?",
        "choice1": "All of the above",
        "choice2": "Better understanding of other people's experiences",
        "choice3": "Improved ability to identify and understand our own emotions",
        "choice4": "Improved decision-making based on facts rather than emotions or assumptions"
    },
    {
        "id": 19,
        "question": "What is external self-awareness?",
        "choice1": "Understanding how other people view us",
        "choice2": "Knowing our own values, passions, aspirations, and impact on others",
        "choice3": "None of the above",
        "choice4": "Both a and b"
    },
    {
        "id": 20,
        "question": "What is internal self-awareness?",
        "choice1": "Knowing our own values, passions, aspirations, and impact on others",
        "choice2": "None of the above",
        "choice3": "Understanding how other people view us",
        "choice4": "Both a and b"
    },
    {
        "id": 21,
        "question": "What are the two types of self-awareness?",
        "choice1": "Internal self-awareness and external self-awareness",
        "choice2": "Physical self-awareness and mental self-awareness",
        "choice3": "Emotional self-awareness and cognitive self-awareness",
        "choice4": "Personal self-awareness and social self-awareness"
    },
    {
        "id": 22,
        "question": "What is the major component of practicing self-control?",
        "choice1": "Using these standards as a way to judge the rightness of our thoughts and behaviors",
        "choice2": "Using these standards as a way to judge the wrongness of our thoughts and behaviors",
        "choice3": "Not caring about our standards",
        "choice4": "Following our standards blindly"
    },
    {
        "id": 23,
        "question": "What is self-awareness theory?",
        "choice1": "The idea that you are the entity observing your thoughts",
        "choice2": "The idea that you are your thoughts",
        "choice3": "The idea that you are your actions",
        "choice4": "The idea that you are your feelings"
    },
    {
        "id": 24,
        "question": "What is the most important function of self-awareness?",
        "choice1": "To determine the quality of life",
        "choice2": "To get a good job",
        "choice3": "To make friends",
        "choice4": "To become rich"
    },
    {
        "id": 25,
        "question": "What is self-awareness?",
        "choice1": "Awareness of one's mind, needs, motives, feelings, thoughts, actions, and instincts",
        "choice2": "Awareness of one's physical qualities only",
        "choice3": "Awareness of other people's mind and actions",
        "choice4": "Awareness of one's mind and actions only"
    },
    {
        "id": 26,
        "question": "What is the purpose of the Wheel of Life?",
        "choice1": "To assess and understand how areas in your life are currently balanced",
        "choice2": "To help achieve a work-life balance",
        "choice3": "To come up with fantastical and absurd ideas without any filter",
        "choice4": "To incorporate the perspectives of the dreamer, realist, and critic in filmmaking"
    },
    {
        "id": 27,
        "question": "Who is the originator of the Wheel of Life?",
        "choice1": "Paul J. Meyer",
        "choice2": "None of the above",
        "choice3": "Robert Dilts",
        "choice4": "Walt Disney"
    },
    {
        "id": 28,
        "question": "What is the Wheel of Life?",
        "choice1": "A method of assessing and balancing different areas of life",
        "choice2": "A method of conducting brainstorming sessions with three separate chairs",
        "choice3": "A method of storytelling that involves creating fantastical and absurd ideas without any filter",
        "choice4": "A method of filmmaking that involves incorporating the perspectives of the dreamer, realist, and critic"
    },
    {
        "id": 29,
        "question": "How can self-awareness improve job performance?",
        "choice1": "By increasing alignment between our actions and our standards",
        "choice2": "By assessing and understanding how areas in our life are currently balanced",
        "choice3": "By asking oneself \"why\" questions",
        "choice4": "By understanding how others view us with regards to our strengths, weaknesses, values, etc."
    },
    {
        "id": 30,
        "question": "31. What is the difference between a vision and a mission?",
        "choice1": "A vision focuses on tomorrow and what the organization or a person wants to become, while a mission focuses on today and what the organization or a person does",
        "choice2": "A vision is individual-oriented, while a mission is organization-oriented",
        "choice3": "A vision is the ultimate goal, while a mission signifies what people have to do to achieve that goal",
        "choice4": "A vision focuses on long-term goals, while a mission focuses on short-term goals"
    },
    {
        "id": 31,
        "question": "What is the ultimate goal of having a vision?",
        "choice1": "To focus on tomorrow and what the organization or a person wants to become",
        "choice2": "To focus on today and what the organization or a person does",
        "choice3": "To achieve work-life balance",
        "choice4": "To improve communication, confidence, and job performance"
    },
    {
        "id": 32,
        "question": "What is the third phase of the Walt Disney Method?",
        "choice1": "Critic",
        "choice2": "Dreamer",
        "choice3": "None of the above",
        "choice4": "Realist"
    },
    {
        "id": 33,
        "question": "What is the role of the realist in the Walt Disney Method?",
        "choice1": "To examine possible ways to achieve an objective from a practical perspective",
        "choice2": "To represent how the end user will experience the plan or idea",
        "choice3": "To come up with fantastical and absurd ideas without any filter",
        "choice4": "To critically examine plans or ideas and filter out crucial mistakes"
    },
    {
        "id": 34,
        "question": "What is the Walt Disney Method?",
        "choice1": "A method of filmmaking that involves incorporating the perspectives of the dreamer, realist, and critic",
        "choice2": "A method of storytelling that involves creating fantastical and absurd ideas without any filter",
        "choice3": "A method of conducting brainstorming sessions with three separate chairs",
        "choice4": "A method of assessing and balancing different areas of life"
    },
    {
        "id": 35,
        "question": "According to the passage, why do you need to discover yourself and become more self-aware?",
        "choice1": "To have better control of your own life and engage in meaningful activities",
        "choice2": "To become more successful in your career",
        "choice3": "To avoid making bad choices based on emotions or assumptions",
        "choice4": "To be more tolerant towards others"
    },
    {
        "id": 36,
        "question": "What qualities does self-awareness improve in a person?",
        "choice1": "communication, confidence, and job performance",
        "choice2": "creativity, decision making and research",
        "choice3": "communicate, critique, and work performance",
        "choice4": "communication, agility and research"
    },
    {
        "id": 37,
        "question": "What do Critics do according to the Walt Disney Method?",
        "choice1": "looks at a plan like an observer and filters out and removes all crucial mistakes.",
        "choice2": "criticizes the plan and filters and corrects all important errors.",
        "choice3": "sees limitless opportunities",
        "choice4": "looks at aspects such as the available amount of means and time."
    },
    {
        "id": 38,
        "question": "39. What do Realists do according to the Walt Disney Method?",
        "choice1": "looks at the practical possibilities to find out whether an idea is really feasible",
        "choice2": "reads articles to find out if a realist idea is really interesting.",
        "choice3": "gives probabilities to find out if the idea is related to the past",
        "choice4": "is looking for ways to prove that the idea is meaningless."
    },
    {
        "id": 39,
        "question": "40. What do dreamers do according to the Walt Disney Method?",
        "choice1": "A dreamer is seeing limitless opportunities",
        "choice2": "The dreamer sees endless problems",
        "choice3": "The dreamer sees endless boundaries",
        "choice4": "The dreamer sees endless failures"
    },
    {
        "id": 40,
        "question": "What did Milton Erickson see as the therapist's first duty in lifting symptoms?",
        "choice1": "as easing or removing the unpleasant psychological complaint",
        "choice2": "determine the interests of a person and direct him to them",
        "choice3": "to normalize communication between people",
        "choice4": "increase self-confidence and make it more bearable"
    },
    {
        "id": 41,
        "question": "What is the legendary \"Erickson handshake\"?",
        "choice1": "This is Erickson's technique of sending a person into a deep trance",
        "choice2": "This is Erickson's deep recognition technique",
        "choice3": "This is Erickson's technique of understanding the social process.",
        "choice4": "This is Erickson's social environment learning technique."
    },
    {
        "id": 42,
        "question": "43. What does self-observation mean?",
        "choice1": "this is a completely objective assessment of yourself",
        "choice2": "it is a regular assessment of your personal relationships",
        "choice3": "it is an assessment of job opportunities",
        "choice4": "it is an assessment of how others treat you"
    },
    {
        "id": 43,
        "question": "Choose an answer that does not relate to the benefits of external self-awareness?",
        "choice1": "personal and social control",
        "choice2": "greater productivity",
        "choice3": "job satisfaction",
        "choice4": "higher-performing employees"
    },
    {
        "id": 44,
        "question": "What idea is the process of self-realization based on?",
        "choice1": "you are not your thoughts, but the entity observing your thoughts;",
        "choice2": "you are your thoughts and the entity observing your thoughts;",
        "choice3": "you are not the thinker, separate and apart from your thoughts",
        "choice4": "you are your thoughts, but you are not an entity observing your thoughts;"
    },
    {
        "id": 45,
        "question": "Which answer is not about self-awareness?",
        "choice1": "to understand social processes",
        "choice2": "To understand your feelings",
        "choice3": "To understand your own thoughts",
        "choice4": "To understand your needs"
    },
    {
        "id": 46,
        "question": "What must be done for a person to see himself objectively?",
        "choice1": "try to define your existing understanding by writing down what you think is good or what you need to improve",
        "choice2": "don't think it could be wrong and do the things you need to improve in the future",
        "choice3": "don't focus on what you are proud of or think about the achievements that really make a difference in your life.",
        "choice4": "think about your childhood and what hurt you then"
    },
    {
        "id": 47,
        "question": "What is the basic concept of active listening?",
        "choice1": "you listen with the intent to understand instead of just pausing before you start talking again",
        "choice2": "you rehearse before you start talking again",
        "choice3": "you look at the material again instead of pausing before you start talking again.",
        "choice4": "you take time to relax before you start talking again"
    },
    {
        "id": 48,
        "question": "What is the Walt Disney Method about?",
        "choice1": "Walt Disney Method is about different perspectives",
        "choice2": "The Walt Disney Method is about the same thoughts",
        "choice3": "The Walt Disney Method is about different flaws",
        "choice4": "The Walt Disney Method is about different bugs"
    },
    {
        "id": 49,
        "question": "In addition to the therapeutic value of hypnosis, what did Milton Erickson show?",
        "choice1": "the central role hypnosis plays in creating and maintaining emotional problems",
        "choice2": "the central role hypnosis plays in the formation of biological needs",
        "choice3": "the central role hypnosis plays in the analysis of the psychological state",
        "choice4": "the central role hypnosis plays in forming an individual vision of the future"
    },
    {
        "id": 50,
        "question": "Which answer does not apply to the proven benefits of Self-Awareness",
        "choice1": "it does not give us a greater ability to regulate our emotions",
        "choice2": "it leads to better decision-making",
        "choice3": "self-awareness allows us to see things from the perspective of others (from multiple perspectives)",
        "choice4": "it can make us more proactive"
    },
    {
        "id": 51,
        "question": "Why is self-awareness important?",
        "choice1": "self-awareness skills are important for learning about yourself and discovering your true capabilities,",
        "choice2": "self-awareness skills are important for learning and recognizing people,",
        "choice3": "lf-awareness skills are important for studying developmental dynamics and understanding change,",
        "choice4": "self-awareness skills are important for learning about society and discovering real opportunities,"
    },
    {
        "id": 52,
        "question": "Which of the following is not a Self-Awareness component?",
        "choice1": "Self-assessment",
        "choice2": "Self-observation",
        "choice3": "Self-analysis",
        "choice4": "Comparison"
    },
    {
        "id": 53,
        "question": "Why do you need to discover yourself (to become more self-aware) at all?",
        "choice1": "because you need to discover yourself in order to better control your own life.",
        "choice2": "because you need to discover yourself in order to conduct more qualitative research",
        "choice3": "because you need to discover yourself in order to understand the social processes taking place in society",
        "choice4": "because you need to discover yourself in order to resolve conflicts between people"
    },
    {
        "id": 54,
        "question": "How many are there broad categories or types of self-awareness?",
        "choice1": "two broad categories or types of self-awareness",
        "choice2": "three broad categories or types of self-awareness",
        "choice3": "four broad categories or types of self-awareness",
        "choice4": "five broad categories or types of self-awareness"
    },
    {
        "id": 55,
        "question": "What is the most important function of properly formed self-awareness?",
        "choice1": "it determines the quality of life",
        "choice2": "to identify the problems of society",
        "choice3": "give advice to people",
        "choice4": "to form a vision for the future"
    },
    {
        "id": 56,
        "question": "What three roles did Disney use simultaneously to emphasize different perspectives?",
        "choice1": "critic, dreamer and realist",
        "choice2": "critic, pissimist and realist",
        "choice3": "pissimist, dreamer and realist",
        "choice4": "pessimist, optimist and dreamer"
    },
    {
        "id": 57,
        "question": "What is the mission?",
        "choice1": "Mission signifies what people have to do to achieve the goal",
        "choice2": "The mission tells people what to do to learn from their mistakes",
        "choice3": "The mission tells people what needs to change",
        "choice4": "The mission outlines what people need to do to learn what they think"
    },
    {
        "id": 58,
        "question": "What is vision?",
        "choice1": "Vision is the ultimate goal",
        "choice2": "Vision is an intermediate view",
        "choice3": "Vision is the first goal",
        "choice4": "Vision is the first step"
    },
    {
        "id": 59,
        "question": "What does Milton Erickson's principle of \"change is inevitable\" say?",
        "choice1": "we should not resist any kind of change",
        "choice2": "we must not pay attention to every word spoken",
        "choice3": "we must not do all the work assigned to us on time",
        "choice4": "we must not go to every place called"
    },
    {
        "id": 60,
        "question": "Which of the answers does not apply to Ericsson's five principles?",
        "choice1": "People have insecurities",
        "choice2": "People do their best",
        "choice3": "Every person has a positive intention",
        "choice4": "Change is inevitable"
    },
    {
        "id": 61,
        "question": "How did Milton Erickson treat people in family therapy?",
        "choice1": "He would view a person as part of a wider system, not just as an isolated individual",
        "choice2": "He saw man as an innovative individual, not as a conservative",
        "choice3": "He saw man as an isolated individual, not as part of a broader system.",
        "choice4": "He saw man as a harmful individual, not a broader useful system"
    },
    {
        "id": 62,
        "question": "What questions should you not ask yourself during meditation?",
        "choice1": "What are people looking for in business today?",
        "choice2": "What can I do to change?",
        "choice3": "What am I doing that is working?",
        "choice4": "What am I doing that is slowing me down?"
    },
    {
        "id": 63,
        "question": "What does external self-awareness (public self-awareness mean?",
        "choice1": "understanding how other people view us",
        "choice2": "how clearly we see our own values",
        "choice3": "how clearly we see our own aspirations",
        "choice4": "how clearly we see our own reactions"
    },
    {
        "id": 64,
        "question": "What features do not belong to internal self-awareness (private self-awareness)?",
        "choice1": "how clearly we see our research",
        "choice2": "how clearly we see our own aspirations",
        "choice3": "how clearly we see our own values",
        "choice4": "how clearly we see our own passions"
    },
    {
        "id": 65,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotionally intelligent people understand other people's feelings (facial expressions, gestures, appearance, gait, behavior,voice) and it is the ability to recognize and identify your own feelings",
        "choice2": "Emotionally intelligent people pass on their negative energies to others",
        "choice3": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 66,
        "question": "\"Daniel Goleman's model argues that emotional intelligence consists of a ...... component.\" Instead of dots determine the option in which the omitted number is recorded correctly.",
        "choice1": "5",
        "choice2": "6",
        "choice3": "8",
        "choice4": "7"
    },
    {
        "id": 67,
        "question": "How many components does the Mayer-Salovey-Caruso Emotional Intelligence Model (Skill Model) consist of?",
        "choice1": "4",
        "choice2": "7",
        "choice3": "6",
        "choice4": "5"
    },
    {
        "id": 68,
        "question": "father doesn't get angry with the child who spilled the ink of the pen at home. He remembers that he also experienced this situation in his childhood and was very afraid. What trait does the parent reflect in this situation.",
        "choice1": "empathy",
        "choice2": "simpathy",
        "choice3": "endurement",
        "choice4": "motivation"
    },
    {
        "id": 69,
        "question": "Our brain can give us wrong information in similar situations. What could it have a negative effect on?",
        "choice1": "on our decision making",
        "choice2": "on our networking ability",
        "choice3": "on our logical thinking",
        "choice4": "on our analytical thinking"
    },
    {
        "id": 70,
        "question": "Which of the following is true about emotions?",
        "choice1": "1,3",
        "choice2": "1.emotions can lie",
        "choice3": "2.emotions cant lie",
        "choice4": "3.emotions may be irrational"
    },
    {
        "id": 71,
        "question": "What is meant by fewer impulsive and irrational decisions?",
        "choice1": "all of them",
        "choice2": "absurd decisions",
        "choice3": "unreasonable decisions",
        "choice4": "illogical decisions"
    },
    {
        "id": 72,
        "question": "Why logic is considered better than emotions in decision making?",
        "choice1": "1,2",
        "choice2": "3. The more you can think intuitively before making a decision, the more likely it will be the best decision for you.",
        "choice3": "1. The more you can think critically before making a decision, the more likely it will be the best decision for you.",
        "choice4": "2. The more you can think objectively before making a decision, the more likely it will be the best decision for you."
    },
    {
        "id": 73,
        "question": "Which of the following is false about intuitive thinking- that Daniel calls the first system?",
        "choice1": "İt is slow, demanding and deliberate",
        "choice2": "creates an image of the world around us",
        "choice3": "We simply do these actions without consciously thinking about how to do them",
        "choice4": "allows you to perform various actions"
    },
    {
        "id": 74,
        "question": "When I was refereeing neighborhood football competitions, my close friend deliberately knocked down another football player. But I ignored it and stayed silent to keep him out of the game. In this case, what factor influenced referee's decision?",
        "choice1": "negative emotional endearment",
        "choice2": "the existence of personal interest",
        "choice3": "misleading past experience",
        "choice4": "Low IQ level"
    },
    {
        "id": 75,
        "question": "At my previous workplace, female employees were almost illiterate. that's why I don't hire female employees anymore. what is the factor influencing this decision",
        "choice1": "misleading past experience",
        "choice2": "Low IQ level",
        "choice3": "the existence of personal interest",
        "choice4": "negative emotional endearment"
    },
    {
        "id": 76,
        "question": "If a doctor prescribes a more expensive drug instead of more relevant drug ( in terms of price) to his patient, what factor influenced the doctor's decision probably?",
        "choice1": "the existence of personal interest",
        "choice2": "negative emotional endearment",
        "choice3": "misleading past experience",
        "choice4": "Low IQ level"
    },
    {
        "id": 77,
        "question": "One of the things written about IQ and EQ is wrong",
        "choice1": "IQ and EQ are opposite concepts",
        "choice2": "The contribution of EQ to success in life is at most 80%",
        "choice3": "Innate and learned emotional reactions are controlled by the limbic system of the brain.",
        "choice4": "The contribution of IQ to success in life is at most 20%"
    },
    {
        "id": 78,
        "question": "The ability to remain positive in the face of setbacks is the indicator of _______",
        "choice1": "self motivation",
        "choice2": "empathy",
        "choice3": "self control",
        "choice4": "self awareness"
    },
    {
        "id": 79,
        "question": "_________is skillful in building relationships and networking, the ability to find common ground and build close relationships",
        "choice1": "relationship management",
        "choice2": "self awareness",
        "choice3": "self motivation",
        "choice4": "self control"
    },
    {
        "id": 80,
        "question": "In John Mayer and Peter Salovey's model of emotional intelligence,ühich step is followed by the conscious management of emotions?",
        "choice1": "A person's ability to understand and perceive their own or others' emotions",
        "choice2": "The ability to regulate emotions as a driving force for emotional and intellectual development",
        "choice3": "The ability to acquire emotions that help a person understand himself or others",
        "choice4": "To fully and accurately express (describe), perceive and evaluate emotion"
    },
    {
        "id": 81,
        "question": "Which one is related to emotional intelligence?",
        "choice1": "all of them",
        "choice2": "Being able to adapt to events encountered for the first time",
        "choice3": "find connection between cause and effect",
        "choice4": "understanding similarities and differences"
    },
    {
        "id": 82,
        "question": "Why do we react differently in stressful situations?",
        "choice1": "the cycle brain thinks in normal situations change during emotional cases",
        "choice2": "brain blocks itself and it cant react normally",
        "choice3": "it depends on the age of brain",
        "choice4": "it depends on the shape of amygdala"
    },
    {
        "id": 83,
        "question": "What is the influence of emotions in decision-making processes?",
        "choice1": "Decisive",
        "choice2": "Unimportant",
        "choice3": "Negligible",
        "choice4": "Non-existent"
    },
    {
        "id": 84,
        "question": "What is the three-component system of decision making in business life?",
        "choice1": "Evaluation of available options, selection of preferred option, and evaluation of result",
        "choice2": "Ignorance, intention, and action",
        "choice3": "Personal interests, negative emotional endearment, and cognitive biases",
        "choice4": "Self-awareness, empathy, and relationship management"
    },
    {
        "id": 85,
        "question": "What are cognitive biases according to the field of behavioral psychology?",
        "choice1": "Errors in judgment caused by incomplete information or irrelevant facts",
        "choice2": "The influence of emotions in decision-making processes",
        "choice3": "The ability to understand and control one's emotions",
        "choice4": "The ability to solve complex problems"
    },
    {
        "id": 86,
        "question": "What are the three factors that encourage bad decision-making from past experiences?",
        "choice1": "Personal interests, negative emotional endearment, and cognitive biases",
        "choice2": "Self-awareness, empathy, and relationship management",
        "choice3": "Ignorance, intention, and action",
        "choice4": "Misleading past experiences, self-control, and self-motivation"
    },
    {
        "id": 87,
        "question": "What is relationship management according to Goleman's theory of emotional intelligence?",
        "choice1": "The skill of building relationships and networking with others",
        "choice2": "The ability to motivate oneself",
        "choice3": "The ability to control or direct one's emotions",
        "choice4": "The ability to understand and accept one's own moods, emotions, and images, as well as their impact on others"
    },
    {
        "id": 88,
        "question": "What is empathy according to Goleman's theory of emotional intelligence?",
        "choice1": "The ability to understand the emotional states of other people and treat them accordingly",
        "choice2": "The ability to control or direct one's emotions",
        "choice3": "The ability to motivate oneself",
        "choice4": "The ability to understand and accept one's own moods, emotions, and images, as well as their impact on others"
    },
    {
        "id": 89,
        "question": "6 вопросов",
        "choice1": "The ability to understand and accept one's own moods, emotions, and images, as well as their impact on others",
        "choice2": "The ability to build relationships and network with others",
        "choice3": "The ability to control or direct one's emotions",
        "choice4": "The ability to motivate oneself"
    },
    {
        "id": 90,
        "question": "What is emotional intelligence according to Daniel Goleman?",
        "choice1": "The ability to understand and control one's emotions",
        "choice2": "A fixed trait that cannot be learned",
        "choice3": "The ability to read and understand other people's emotions",
        "choice4": "The ability to solve complex problems"
    },
    {
        "id": 91,
        "question": "What is the name of the guiding principle recommended by Goleman that suggests learning is more effective when people shape and direct their learning programs according to their needs, circumstances, and motivations?",
        "choice1": "Let the change process manage itself",
        "choice2": "Self-awareness",
        "choice3": "Self-motivation",
        "choice4": "Self-control"
    },
    {
        "id": 92,
        "question": "According to Goleman, what can motivate people to acquire or change a skill?",
        "choice1": "If they perceive a skill as important to improving their performance",
        "choice2": "If they are threatened with job loss",
        "choice3": "If they are told to do so by their boss",
        "choice4": "If they are offered a promotion"
    },
    {
        "id": 93,
        "question": "What is the fourth level of readiness to acquire any skill or change an existing bad habit?",
        "choice1": "Preparation",
        "choice2": "Ignorance",
        "choice3": "Action",
        "choice4": "Intention"
    },
    {
        "id": 94,
        "question": "Why is it important to choose an appropriate technique when giving feedback about a person's strengths and weaknesses?",
        "choice1": "Because inappropriate technique can discourage change",
        "choice2": "Because inappropriate technique can make a person feel overconfident",
        "choice3": "Because feedback is not related to emotions",
        "choice4": "Because it is not necessary to provide feedback about weaknesses"
    },
    {
        "id": 95,
        "question": "What needs to be assessed to determine an individual's strengths and limitations?",
        "choice1": "Personality",
        "choice2": "Work performance",
        "choice3": "Physical abilities",
        "choice4": "Intelligence quotient"
    },
    {
        "id": 96,
        "question": "What is the name of Daniel Goleman's book that introduced new ideas related to emotional intelligence?",
        "choice1": "Emotional Intelligence",
        "choice2": "Self-motivation",
        "choice3": "Self-awareness",
        "choice4": "Self-control"
    },
    {
        "id": 97,
        "question": "Which of the following is a skill related to relationship management, as recommended by Goleman?",
        "choice1": "Skillful in building relationships and networking",
        "choice2": "Ability to understand and accept one's own moods, emotions, and images",
        "choice3": "Ability to motivate oneself",
        "choice4": "Ability to control or direct one's emotions"
    },
    {
        "id": 98,
        "question": "What is the fourth guiding principle recommended by Goleman to strengthen emotional intelligence?",
        "choice1": "Empathy",
        "choice2": "Self-motivation",
        "choice3": "Self-awareness",
        "choice4": "Self-control"
    },
    {
        "id": 99,
        "question": "Which of the following is NOT a guiding principle recommended by Daniel Goleman to strengthen emotional intelligence?",
        "choice1": "All of the above are guiding principles recommended by Goleman",
        "choice2": "Self-awareness",
        "choice3": "Self-motivation",
        "choice4": "Self-control"
    },
    {
        "id": 100,
        "question": "Which of the following is true about emotional intelligence?",
        "choice1": "It can be learned and developed",
        "choice2": "It cannot be acquired later in life",
        "choice3": "It is not important for personal and business success",
        "choice4": "None of the above"
    },
    {
        "id": 101,
        "question": "Which of the following is not true about Emotional Intelligence and IQ - Intelligence Quotient?",
        "choice1": "Emotional intelligence is all the intellectual, analytical, logical and rational abilities of an individual.",
        "choice2": "Intellectual intelligence accounts for 20% of success in business life, while emotional intelligence accounts for 80% of success.",
        "choice3": "IQ is all the intellectual, analytical, logical and rational abilities of an individual, while Emotional intelligence is the harmony of mind and heart.",
        "choice4": "IQ and EQ are not mutually opposite, they are separate abilities."
    },
    {
        "id": 102,
        "question": "103. Which of the following is true about Emotional Intelligence and IQ - Intelligence Quotient?",
        "choice1": "IQ is all the intellectual, analytical, logical and rational abilities of an individual, while Emotional intelligence is the harmony of mind and heart.",
        "choice2": "Both of them are the same",
        "choice3": "Intelligence Quotient is the harmony of mind and heart.",
        "choice4": "Intellectual intelligence accounts for 80% of success in business life, while emotional intelligence accounts for 20% of success."
    },
    {
        "id": 103,
        "question": "104. What to do to strengthen emotional intelligence according to Daniel Goleman? 1. Measure the level of readiness. 2. Always delegate work.3. Motivate people. 4.Repeat old habits regularly. 5. Encourage.",
        "choice1": "1,3,5",
        "choice2": "2,3,4",
        "choice3": "1,2,4",
        "choice4": "3,4,5"
    },
    {
        "id": 104,
        "question": "Which of the following statements about emotional intelligence is correctly mentioned?",
        "choice1": "It is possible to say that people with high emotional intelligence will be more successful in evaluating alternatives, observing and interpreting internal and external changes in a problem-solving or decision-making situation.",
        "choice2": "A person is born with Emotional Intelligence, it cannot be acquired or strengthened later.",
        "choice3": "Emotions have no influence on decision-making processes.",
        "choice4": "IQ and EQ are the same abilities"
    },
    {
        "id": 105,
        "question": "106. Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "People with high EQ are confident and open-minded",
        "choice2": "People with high EQ are insecure and outspoken",
        "choice3": "People with high EQ are self-confident and self-contained",
        "choice4": "People with high EQ are confident and have a negative aura"
    },
    {
        "id": 106,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotionally intelligent people recognize the existence of emotion, distinguish their feelings and their formation and have the ability to understand the reasons",
        "choice2": "Emotionally intelligent people pass on their negative energies to others",
        "choice3": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 107,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotional intelligence is the ability to maintain such hope and a positive attitude in difficult situations",
        "choice2": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice3": "Emotionally intelligent people are always on the defensive",
        "choice4": "Emotionally intelligent people pass on their negative energies to others"
    },
    {
        "id": 108,
        "question": "One of the things about emotional intelligence is true.",
        "choice1": "When we hide our feelings and emotions, they accumulate over time and cause tension, stress and anxiety.",
        "choice2": "Even if you don't do what you need to do on time, these feelings will not tire your mind and body",
        "choice3": "Your emotional intelligence is more in the face of a problematic situation after an event will help you behave in control.",
        "choice4": "When we hide our feelings and emotions, they do not accumulate over time and cause tension, stress and anxiety."
    },
    {
        "id": 109,
        "question": "110. Identify the correctly interpreted version of \"Social Skills\", one of the components of the model of emotional intelligence created by Daniel Goleman.",
        "choice1": "the ability to relate to people, to manipulate people, to draw them in the direction they want",
        "choice2": "the ability to empathize with other people, as well as other people's feelings when making decisions is the ability to take into account",
        "choice3": "is the ability to strive to achieve a goal. This ability is especially true when difficulties arise or",
        "choice4": "Recognize your feelings, motivation in decision-making, strengths and weaknesses, goals and is the ability to set your life values."
    },
    {
        "id": 110,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "People with emotional intelligence are flexible, can adjust their feelings, thoughts and have the ability to quickly adjust their beliefs and behaviors.",
        "choice2": "Emotionally intelligent people pass on their negative energies to others",
        "choice3": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 111,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotionally intelligent people are able to test their thoughts and feelings with objective external reality",
        "choice2": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice3": "Emotionally intelligent people pass on their negative energies to others",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 112,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotional people have the ability to feel happy with themselves, others and life in general",
        "choice2": "Emotionally intelligent people pass on their negative energies to others",
        "choice3": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 113,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotionally intelligent people is capable of recognizing, being aware of and understanding the feelings of others",
        "choice2": "Emotionally intelligent people pass on their negative energies to others",
        "choice3": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 114,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotionally intelligent people have the ability to self-reliant and emotionally independent",
        "choice2": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice3": "Emotionally intelligent people pass on their negative energies to others",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 115,
        "question": "Identify the correct interpretation of \"Empathy\", one of the components of the model of emotional intelligence proposed by Daniel Goleman.",
        "choice1": "the ability to empathize with other people, as well as other people's feelings when making decisions is the ability to take into account.",
        "choice2": "is the ability to strive to achieve a goal. This ability is especially true when difficulties arise or useful when things go wrong. A self-motivated person, without giving up in the face of adversity finds the strength to continue and becomes stronger.",
        "choice3": "the ability to relate to people, to manipulate people, to draw them in the direction they want.",
        "choice4": "the ability to control your emotions, to stop impulses"
    },
    {
        "id": 116,
        "question": "Identify the correctly interpreted version of \"Motivation\", one of the components of the model of emotional intelligence created by Daniel Goleman.",
        "choice1": "the ability to strive to achieve a goal. This ability is especially useful when difficulties arise or things go wrong. A person who is able to motivate himself finds the strength to persevere in the face of adversity and becomes stronger.",
        "choice2": "the ability to control your emotions, to stop impulses",
        "choice3": "the ability to empathize with other people, as well as other people's feelings when making decisions",
        "choice4": "the ability to relate to people, to manipulate people, to draw them in the direction they want."
    },
    {
        "id": 117,
        "question": "118. Identify the variant in which \"Self-control\", one of the components of the model of emotional intelligence created by Daniel Goleman, is correctly interpreted.",
        "choice1": "the ability to control your emotions, to stop impulses",
        "choice2": "is the ability to strive to achieve a goal. This ability is especially true when difficulties arise or useful when things go wrong. A self-motivated person, without giving up in the face of adversity finds the strength to continue and becomes stronger.",
        "choice3": "the ability to empathize with other people, as well as other people's feelings when making decisions is the ability to take into account",
        "choice4": "the ability to relate to people, to manipulate people, to draw them in the direction they want"
    },
    {
        "id": 118,
        "question": "Identify the correctly interpreted version of \"Self-awareness\", one of the components of the model of emotional intelligence created by Daniel Goleman.",
        "choice1": "Recognize your feelings, motivation in decision-making, strengths and weaknesses, goals and is the ability to set your life values",
        "choice2": "the ability to control your emotions, to stop impulses",
        "choice3": "is the ability to strive to achieve a goal. This ability is especially true when difficulties arise or useful when things go wrong. A self-motivated person, without giving up in the face of adversity finds the strength to continue and becomes stronger",
        "choice4": "the ability to empathize with other people, as well as other people's feelings when making decisions is the ability to take into account"
    },
    {
        "id": 119,
        "question": "Empathy, one of the components of a Daniel Goleman's model, is defined as a variant that is correctly interpreted",
        "choice1": "is the ability to take other people's feelings into account when making decisions.",
        "choice2": "the ability to control your emotions, to stop impulses.",
        "choice3": "is the ability to strive to achieve a goal.",
        "choice4": "the ability to relate to people, to manipulate people, to draw them in the direction they want"
    },
    {
        "id": 120,
        "question": "Identify the variant in which \"Stress management strategies\", one of the components of the model of \"Development and Testing of the Concept of Psychological Happiness\"developed by Reuven Bar-On, is correctly interpreted.",
        "choice1": "Ability to cope with stress and manage strong emotions",
        "choice2": "The ability to feel and express happiness",
        "choice3": "Accurate assessment of the current situation",
        "choice4": "Understanding your own self"
    },
    {
        "id": 121,
        "question": "Identify the variant in which \"Motivation and general mood\", one of the components of the model of \"Development and Testing of the Concept of Psychological Happiness\"developed by Reuven Bar-On, is correctly interpreted.",
        "choice1": "The ability to feel and express happiness",
        "choice2": "Accurate assessment of the current situation",
        "choice3": "Recognizing and understanding the feelings of others",
        "choice4": "Understanding your own feelings. The ability to express one's feelings and thoughts"
    },
    {
        "id": 122,
        "question": "Identify the variant in which \"Adaptability skills\", one of the components of the model of \"Development and Testing of the Concept of Psychological Happiness\"developed by Reuven Bar-On, is correctly interpreted.",
        "choice1": "Accurate assessment of the current situation",
        "choice2": "Recognizing and understanding the feelings of others",
        "choice3": "Understanding your own feelings. The ability to express one's feelings and thoughts",
        "choice4": "Being an optimist"
    },
    {
        "id": 123,
        "question": "Identify the variant in which \"Interpersonal skills\", one of the components of the model of \"Development and Testing of the Concept of Psychological Happiness\"developed by Reuven Bar-On, is correctly interpreted.",
        "choice1": "Recognizing and understanding the feelings of others",
        "choice2": "Accurate assessment of the current situation",
        "choice3": "Understanding your own self",
        "choice4": "The ability to feel and express happiness"
    },
    {
        "id": 124,
        "question": "Identify the variant in which \"Personal skills\", one of the components of the model of \"Development and Testing of the Concept of Psychological Happiness\"developed by Reuven Bar-On, is correctly interpreted.",
        "choice1": "Understanding your own feelings. The ability to express one's feelings and thoughts",
        "choice2": "Recognizing and understanding the feelings of others",
        "choice3": "Accurate assessment of the current situation",
        "choice4": "Ability to cope with stress and manage strong emotions"
    },
    {
        "id": 125,
        "question": "126. One of the following is a component of the John Mayer and Peter Salovey's “Four Levels of Emotional Intelligence” model.",
        "choice1": "The ability to fully and accurately express (describe), perceive and evaluate emotion",
        "choice2": "Ability to care for people in general and build emotionally close relationships",
        "choice3": "Being an optimist",
        "choice4": "Ability to cope with stress"
    },
    {
        "id": 126,
        "question": "One of the following does not component of the John Mayer and Peter Salovey's “Four Levels of Emotional Intelligence” model.",
        "choice1": "Ability to care for people in general and build emotionally close relationships",
        "choice2": "The ability to fully and accurately express (describe), perceive and evaluate emotion",
        "choice3": "The ability to acquire emotions that help a person understand himself or others",
        "choice4": "A person's ability to understand and perceive their own or others' emotions"
    },
    {
        "id": 127,
        "question": "One of the following does not component of Daniel Goleman \"Emotional Intelligence\" model.",
        "choice1": "Sympathy",
        "choice2": "Empathy",
        "choice3": "Self-awareness",
        "choice4": "Self-motivation"
    },
    {
        "id": 128,
        "question": "Which of the following is not a model of emotional intelligence?",
        "choice1": "\"Self-awareness\" model",
        "choice2": "\"Development and Testing of the Concept of Psychological Happiness\" model",
        "choice3": "“Four Levels of Emotional Intelligence”",
        "choice4": "\"Emotional Intelligence\" model"
    },
    {
        "id": 129,
        "question": "By whom was the term emotional intelligence first used?",
        "choice1": "John Mayer və Peter Salovey",
        "choice2": "Howard Gardner",
        "choice3": "Edward Thorndike",
        "choice4": "Daniel Goleman"
    },
    {
        "id": 130,
        "question": "Which of the following does not common characteristics of emotions?",
        "choice1": "Emotions can not affects the person's desires, actions and goals.",
        "choice2": "Emotions appear spontaneously, involuntarily.",
        "choice3": "When you are in any emotion, you feel excitement at the same time.",
        "choice4": "Emotions can sometimes be pleasant and sometimes not."
    },
    {
        "id": 131,
        "question": "132. Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "The ability of emotionally intelligent people to express their feelings and thoughts clearly and constructively",
        "choice2": "Emotionally intelligent people pass on their negative energies to others",
        "choice3": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice4": "Emotionally intelligent people are always on the defensive"
    },
    {
        "id": 132,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotionally intelligent people have the ability to understand and evaluate themselves",
        "choice2": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice3": "Emotionally intelligent people are always on the defensive",
        "choice4": "Emotionally intelligent people pass on their negative energies to others"
    },
    {
        "id": 133,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotionally intelligent people have the ability to stimulate thinking",
        "choice2": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice3": "Emotionally intelligent people are always on the defensive",
        "choice4": "Emotionally intelligent people pass on their negative energies to others"
    },
    {
        "id": 134,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence.",
        "choice1": "Emotionally intelligent people tame their feelings and the feelings of others to achieve their goals, to have the ability to do, awaken and direct",
        "choice2": "Emotionally intelligent people are usually unable to adequately assess reality",
        "choice3": "Emotionally intelligent people are always on the defensive",
        "choice4": "Emotionally intelligent people pass on their negative energies to others"
    },
    {
        "id": 135,
        "question": "Choose the correct one from the ones mentioned about emotional intelligence",
        "choice1": "Emotional intelligence is the ability to recognize, be aware of, and understand the feelings of others have",
        "choice2": "Emotionally intelligent people pass on their negative energies to others",
        "choice3": "Emotionally intelligent people are always on the defensive",
        "choice4": "Emotionally intelligent people are usually unable to adequately assess reality"
    },
    {
        "id": 136,
        "question": "What are the benefits of six thinking hats?",
        "choice1": "all of them",
        "choice2": "3. helps you to weigh up the information you obtain efficiently",
        "choice3": "1. More organized thinking",
        "choice4": "2. You can be confident that you've considered every angle"
    },
    {
        "id": 137,
        "question": "138. _____________ is a useful tool when you want to understand the perspectives of key stakeholders, in order to incorporate them in your plans.",
        "choice1": "Empathy mapping",
        "choice2": "Constructive Controversy",
        "choice3": "Six thinking hats",
        "choice4": "The Reframing Matrix"
    },
    {
        "id": 138,
        "question": "One of the following ideas is not correct about six thinking hats?",
        "choice1": "It is useful only in professional areas",
        "choice2": "he is also the inventor of lateral thinking",
        "choice3": "It first appeared in his book in 1985",
        "choice4": "It was created by Edward de Bono"
    },
    {
        "id": 139,
        "question": "One of the following is not correct about conflicts",
        "choice1": "Conflicts happen only between 2 people.",
        "choice2": "It is possible to manage conflicts",
        "choice3": "Conflicts may occur between any groups of people",
        "choice4": "One way to manage conflict is to avoid it"
    },
    {
        "id": 140,
        "question": "What needs to be done to develop explanatory skills?",
        "choice1": "1,2",
        "choice2": "1.gauge interest level",
        "choice3": "2. improve storytelling ability",
        "choice4": "3. talk fast"
    },
    {
        "id": 141,
        "question": "142. One of the following is a definition for feedback.",
        "choice1": "information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement",
        "choice2": "a conclusion or resolution reached after consideration.",
        "choice3": "the expression of disapproval of someone or something on the basis of perceived faults or mistakes",
        "choice4": "an expression of opinion or attitude in speech or writing"
    },
    {
        "id": 142,
        "question": "Why is it important to be open to feedback?",
        "choice1": "feedbacks have a positive effect on development",
        "choice2": "It is important to know the opinion of others",
        "choice3": "to learn the opinion of others and apply it",
        "choice4": "to make ourselves look good to others"
    },
    {
        "id": 143,
        "question": "What kind of feedback does the company manager use if he takes notes on the wrong numbers in the report and gives feedback to the employee about it?",
        "choice1": "E2C2 approach",
        "choice2": "Sandwich model",
        "choice3": "Destructive feedback",
        "choice4": "all of them"
    },
    {
        "id": 144,
        "question": "Which is not the cons of Hamburger method?",
        "choice1": "May ease the sting of hearing difficult comments",
        "choice2": "Including positives may undermine the criticism involved, thus rendering that criticism ineffective",
        "choice3": "The method trains people to distrust praise, as they will begin to anticipate the criticism that comes along with it",
        "choice4": "The method detracts from praise when it is truly due"
    },
    {
        "id": 145,
        "question": "Which is not the pros of Hamburger method?",
        "choice1": "It may give people a diluted or inaccurate understanding of their work performance and what changes are required of them",
        "choice2": "Can be useful for managers who find it difficult to engage in criticism",
        "choice3": "Enables meetings to end on a positive note",
        "choice4": "Allows people to increase their receptiveness to criticism"
    },
    {
        "id": 146,
        "question": "One of the followings about feedback is true",
        "choice1": "giving feedback is not as easy as it seems",
        "choice2": "there are 5 types of feedback",
        "choice3": "feedback judges individuals",
        "choice4": "Using third party during feedback is necessary"
    },
    {
        "id": 147,
        "question": "Why elevator pitch is considered important?",
        "choice1": "People are too quick to judge others",
        "choice2": "people think differently in elevator",
        "choice3": "people don’t pay attention details in this case",
        "choice4": "all the variants are right"
    },
    {
        "id": 148,
        "question": "When building relationships in networking, one of the things written is not true.",
        "choice1": "recognize them as source of help first and people second",
        "choice2": "It is very important to offer something before asking for help",
        "choice3": "To build a network of professional friends, you need to be open, honest",
        "choice4": "Be more concerned with their needs than your own"
    },
    {
        "id": 149,
        "question": "Which statement is true about networking skills?",
        "choice1": "it is desired by employers because almost all successful businesses depend on networking",
        "choice2": "knowing networking skills is enough, you dont need to mention it in your CV",
        "choice3": "networking skills are valuable only in professional environments",
        "choice4": "networking skills are valuable only in personal environments"
    },
    {
        "id": 150,
        "question": "One of the following cannot be considered an important stage of communication.",
        "choice1": "to stand up before speaking",
        "choice2": "Thinking about what to say",
        "choice3": "finding the best way to say it",
        "choice4": "finding the right words"
    },
    {
        "id": 151,
        "question": "What should you do before asking for help?",
        "choice1": "Not offer anything",
        "choice2": "Offer something first",
        "choice3": "Offer something after",
        "choice4": "Ask for help immediatelNone of the above"
    },
    {
        "id": 152,
        "question": "What is the key to business and a successful job hunt?",
        "choice1": "Applying to as many jobs as possible",
        "choice2": "Building strong interpersonal relationships over time with people",
        "choice3": "Getting more social media followers",
        "choice4": "Using job search websites"
    },
    {
        "id": 153,
        "question": "Which skills are particularly coveted by employers?",
        "choice1": "Mathematics skills",
        "choice2": "Communication, active listening and social skills",
        "choice3": "Writing skills",
        "choice4": "Artistic skills"
    },
    {
        "id": 154,
        "question": "Which skills are particularly coveted by employers?",
        "choice1": "Communication, active listening and social skills",
        "choice2": "Writing skills",
        "choice3": "Mathematics skills",
        "choice4": "Artistic skills"
    },
    {
        "id": 155,
        "question": "Why are networking skills important?",
        "choice1": "They are important for both personal and professional environments",
        "choice2": "They are not important",
        "choice3": "They are important for personal environments",
        "choice4": "They are important for professional environments"
    },
    {
        "id": 156,
        "question": "What do paralinguistic features provide in spoken communication?",
        "choice1": "Meaning beyond the words and grammar used",
        "choice2": "Words",
        "choice3": "Grammar",
        "choice4": "Sign language"
    },
    {
        "id": 157,
        "question": "What is prosody?",
        "choice1": "The rhythm, pattern, stress, rate, volume, inflection and intonation of a person's speech",
        "choice2": "The aspects of spoken communication that do not involve words",
        "choice3": "Communication that involves body language",
        "choice4": "Communication that involves written communication"
    },
    {
        "id": 158,
        "question": "Which of the following is a form of paralanguage?",
        "choice1": "Laughter",
        "choice2": "Inflection",
        "choice3": "Intonation",
        "choice4": "Words"
    },
    {
        "id": 159,
        "question": "Which of the following is an example of paralinguistic features?",
        "choice1": "Pitch",
        "choice2": "Sign language",
        "choice3": "Written communication",
        "choice4": "Speech"
    },
    {
        "id": 160,
        "question": "What are paralinguistic or paralanguage features?",
        "choice1": "The aspects of spoken communication that do not involve words",
        "choice2": "The aspects of written communication that involve words",
        "choice3": "The aspects of verbal communication that involve sign language",
        "choice4": "The aspects of spoken communication that involve grammar"
    },
    {
        "id": 161,
        "question": "What is non-verbal communication?",
        "choice1": "Communication that involves body language",
        "choice2": "Communication that involves words",
        "choice3": "Communication that involves grammar",
        "choice4": "Communication that involves sign language"
    },
    {
        "id": 162,
        "question": "Which of the following is NOT a paralinguistic feature?",
        "choice1": "Words",
        "choice2": "Pitch",
        "choice3": "Inflection",
        "choice4": "Rate"
    },
    {
        "id": 163,
        "question": "What do paralinguistic features add to verbal communication?",
        "choice1": "Meaning beyond the words and grammar used",
        "choice2": "Words",
        "choice3": "Grammar",
        "choice4": "Sign language"
    },
    {
        "id": 164,
        "question": "Which of the following is an example of non-vocal verbal communication?",
        "choice1": "Sign language",
        "choice2": "Written communication",
        "choice3": "Braille",
        "choice4": "Speech"
    },
    {
        "id": 165,
        "question": "What are the two main forms of communication?",
        "choice1": "Verbal and nonverbal",
        "choice2": "Vocal and nonverbal",
        "choice3": "Verbal and written",
        "choice4": "Oral and aural"
    },
    {
        "id": 166,
        "question": "there are tips you can use when faced with people who can't resolve their own conflicts. Which is wrong?",
        "choice1": "Determine what you'll do if the conflict goes solved easily",
        "choice2": "Determine underlying need",
        "choice3": "Let individuals express their feelings",
        "choice4": "Acknowledge that a difficult situation exists"
    },
    {
        "id": 167,
        "question": "Which of the following is not a strategy to improve your professional networking skills?",
        "choice1": "Work on your hard skills",
        "choice2": "Keeping in contact",
        "choice3": "Leverage on influential connections",
        "choice4": "Work on your communication skills"
    },
    {
        "id": 168,
        "question": "Which of the following is not a strategy to improve your professional networking skills?",
        "choice1": "Building Career",
        "choice2": "Building relationships",
        "choice3": "Keeping in contact",
        "choice4": "Leverage on influential connections"
    },
    {
        "id": 169,
        "question": "Which type of the feedback does this example belong to: \"You're disorganised\"?",
        "choice1": "Attribution",
        "choice2": "Directive",
        "choice3": "Contingency",
        "choice4": "Impact"
    },
    {
        "id": 170,
        "question": "Which type of the feedback does this example belong to: \"If you do a lot of mistakes in your assignment, you will not be able to pass the exam\"?",
        "choice1": "Contingency",
        "choice2": "Directive",
        "choice3": "Attribution",
        "choice4": "Impact"
    },
    {
        "id": 171,
        "question": "Destructive criticism_______________ 1. Diminishes room for discussion with people, 2. Tends to be general rather than specific, 3. Emphasizes results, 4. Sticks to facts, 5. Often makes judgments, accusations, and exaggerations, 6. Can involve yelling, condescension or threats.",
        "choice1": "1, 2, 5, 6",
        "choice2": "1, 3, 5, 6",
        "choice3": "1, 2, 4, 6",
        "choice4": "1, 2, 4, 5"
    },
    {
        "id": 172,
        "question": "Constructive criticism_______________ 1. Emphasizes results, 2. Tends to be general rather than specific, 3. Discusses specific problem areas that require a change, 4. Sticks to facts, 5. Can involve yelling, condescension or threats.",
        "choice1": "1, 3, 4",
        "choice2": "1, 2, 4",
        "choice3": "1, 3, 5",
        "choice4": "1, 2, 3"
    },
    {
        "id": 173,
        "question": "Which of the following is NOT the positive consequence of the Hamburger Method?",
        "choice1": "It may give people a diluted or inaccurate understanding of their work performance",
        "choice2": "Allows people to increase their receptiveness to criticism",
        "choice3": "Enables meetings to end on a positive note",
        "choice4": "May ease the sting of hearing difficult comments"
    },
    {
        "id": 174,
        "question": "Which of the following is the positive consequence of the Hamburger Method?",
        "choice1": "All of the above",
        "choice2": "Enables meetings to end on a positive note",
        "choice3": "Encourages specificity in the feedback process",
        "choice4": "May ease the sting of hearing difficult comments"
    },
    {
        "id": 175,
        "question": "Which of the following is the negative consequence of the Hamburger Method?",
        "choice1": "All of the above",
        "choice2": "Including positives may undermine the criticism involved, thus rendering that criticism ineffective",
        "choice3": "It may give people a diluted or inaccurate understanding of their work performance and what changes are required of them",
        "choice4": "The method detracts from praise when it is truly due"
    },
    {
        "id": 176,
        "question": "Which of the following is NOT the negative consequence of the Hamburger Method?",
        "choice1": "Allows people to increase their receptiveness to criticism",
        "choice2": "The method detracts from praise when it is truly due",
        "choice3": "It may give people a diluted or inaccurate understanding of their work performance and what changes are required of them",
        "choice4": "The method trains people to distrust praise, as they will begin to anticipate the criticism that comes along with it"
    },
    {
        "id": 177,
        "question": "Which approach of E2C2 does this example belong to: \"Your last assignment had several mistakes\"?",
        "choice1": "Evidence",
        "choice2": "Effect",
        "choice3": "Change",
        "choice4": "Continue"
    },
    {
        "id": 178,
        "question": "Which mistakes should be avoided in giving feedback? 1) The feedback speaks for others. 2) The feedback balance the content. 3) The feedback is too vague. 4) The feedback is exaggerated with generalities. 5) The feedback concentrates on the behaviour, not the person. 6) The feedback goes on too long. 7) The feedback is specific and realistic. 8) The feedback uses inappropriate humour.",
        "choice1": "1, 3, 4, 6, 8",
        "choice2": "1, 2, 4, 6, 7",
        "choice3": "1, 3, 4, 7, 8",
        "choice4": "1, 3, 4, 5, 8"
    },
    {
        "id": 179,
        "question": "There are basically three elements in any face-to-face communication. Fill the gaps. ____________ account for 7%; ____________ accounts for 38% and ____________ accounts for 55% of the message.",
        "choice1": "Words, Tone of voice, Body language",
        "choice2": "Body language, Tone of voice, Words",
        "choice3": "Tone of voice, Body language, Words",
        "choice4": "Tone of voice, Facial expressions, Words"
    },
    {
        "id": 180,
        "question": "Which of the following is NOT considered a mistake in providing feedback?",
        "choice1": "The feedback offers continuing support",
        "choice2": "The feedback is a question, not a statement.",
        "choice3": "The feedback judges individuals, not actions",
        "choice4": "The feedback contains an implied threat"
    },
    {
        "id": 181,
        "question": "By using E2C2 method, you start giving feedback with ________",
        "choice1": "Evidence",
        "choice2": "Effect",
        "choice3": "Change",
        "choice4": "Continue"
    },
    {
        "id": 182,
        "question": "Which of the following is considered to be a mistake in providing feedback?",
        "choice1": "The feedback judges individuals, not actions",
        "choice2": "The feedback is timely and specific",
        "choice3": "The feedback balance the content",
        "choice4": "All of the above"
    },
    {
        "id": 183,
        "question": "What does the E2C2 model stand for?",
        "choice1": "Evidence, Effect, Change, Continue",
        "choice2": "Evidence, Evaluate, Choice, Change",
        "choice3": "Earth, Eclipse, Cosmos, Cloud",
        "choice4": "Education, Efficiency, Career, Choice"
    },
    {
        "id": 184,
        "question": "________ feedback informs the receiver about the effect their actions have had on other people or on the organization.",
        "choice1": "Impact",
        "choice2": "Directive",
        "choice3": "Attribution",
        "choice4": "Contingency"
    },
    {
        "id": 185,
        "question": "Which type of feedback describes someone or their actions in terms of a quality or label?",
        "choice1": "Attribution",
        "choice2": "Directive",
        "choice3": "Contingency",
        "choice4": "Impact"
    },
    {
        "id": 186,
        "question": "Which type of feedback tells someone what to do, even if you’re phrasing it “nicely\"?",
        "choice1": "Directive",
        "choice2": "Attribution",
        "choice3": "Contingency",
        "choice4": "Impact"
    },
    {
        "id": 187,
        "question": "Which type of feedback gives a future consequence?",
        "choice1": "Contingency",
        "choice2": "Attribution",
        "choice3": "Directive",
        "choice4": "Impact"
    },
    {
        "id": 188,
        "question": "Which one is NOT a type of feedback?",
        "choice1": "Contractual",
        "choice2": "Attribution",
        "choice3": "Directive",
        "choice4": "Impact"
    },
    {
        "id": 189,
        "question": "Which of the following is the three elements of any face-to-face communication?",
        "choice1": "Words, tone of voice, body language",
        "choice2": "Words, tone of voice, context",
        "choice3": "Gesture,tone of voice, body language",
        "choice4": "Words, movements, body language"
    },
    {
        "id": 190,
        "question": "Destructive criticism_______________",
        "choice1": "All of the above",
        "choice2": "Makes negative assumptions about people or their intent",
        "choice3": "Can be unrestrained",
        "choice4": "Can involve yelling, condescension or threats"
    },
    {
        "id": 191,
        "question": "Constructive criticism_______________",
        "choice1": "All of the above",
        "choice2": "Is offered in calm, unthreatening vocal tones",
        "choice3": "Only discusses behaviors that are changeable",
        "choice4": "Makes room for discussion with people about the benefits of changed behavior"
    },
    {
        "id": 192,
        "question": "____________features employed by a speaker provide hint to the meaning, communicate the speakers’ attitudes and convey their emotion.",
        "choice1": "Paralinguistic",
        "choice2": "Verbal",
        "choice3": "Non-verbal",
        "choice4": "All of the above"
    },
    {
        "id": 193,
        "question": "_____________ features add emphasis or shades of meaning to what people say.",
        "choice1": "Paralinguistic",
        "choice2": "Verbal",
        "choice3": "Non-verbal",
        "choice4": "All of the above"
    },
    {
        "id": 194,
        "question": "Rhythm, pattern, stress, rate, volume, and intonation of a person's speech is a form of_________.",
        "choice1": "Paraverbal",
        "choice2": "Verbal",
        "choice3": "Non-verbal",
        "choice4": "All of the above"
    },
    {
        "id": 195,
        "question": "Which type of communication employs gestures and body language?",
        "choice1": "Non-verbal",
        "choice2": "Verbal",
        "choice3": "Paraverbal",
        "choice4": "All of the above"
    },
    {
        "id": 196,
        "question": "__________ communication involves using speech to exchange information with others.",
        "choice1": "Verbal",
        "choice2": "Non-verbal",
        "choice3": "Paraverbal",
        "choice4": "All of the above"
    },
    {
        "id": 197,
        "question": "Meetings, interviews, conferences, speeches, phone calls are __________communication.",
        "choice1": "Verbal",
        "choice2": "Non-verbal",
        "choice3": "Paraverbal",
        "choice4": "All of the above"
    },
    {
        "id": 198,
        "question": "What is the contingency or situational approach to leadership?",
        "choice1": "The theory that leadership effectiveness depends on the situation",
        "choice2": "The theory that effective leaders can be created based on learnable behavior",
        "choice3": "The theory that leaders possess the right stuff, which is not equally present in all people",
        "choice4": "The theory that great leaders are born, not made"
    },
    {
        "id": 199,
        "question": "What are the advantages of the behavioral approach to leadership?",
        "choice1": "It allows leaders to be flexible and adapt based on their circumstances",
        "choice2": "It suggests that great leaders are born, not made",
        "choice3": "It focuses on situational variables that might moderate the relationship between leader traits and measures of leader effectiveness",
        "choice4": "It offers limited leadership styles, which can lead to inflexibility"
    },
    {
        "id": 200,
        "question": "What is the great-man approach to leadership?",
        "choice1": "The theory that leaders are born with a set of personal qualities that made them effective leaders",
        "choice2": "The theory that effective leaders can be created based on learnable behavior",
        "choice3": "The theory that leadership effectiveness depends on the situation",
        "choice4": "The theory that leaders possess the right stuff, which is not equally present in all people"
    },
    {
        "id": 201,
        "question": "What is the main difference between the trait approach and the behavioral approach to leadership?",
        "choice1": "The trait approach suggests that leaders are born, while the behavioral approach suggests that leadership is a learned behavior.",
        "choice2": "The trait approach focuses on how leaders behave, while the behavioral approach focuses on the traits of effective leaders.",
        "choice3": "The trait approach focuses on situational variables that might moderate the relationship between leader traits and measures of leader effectiveness, while the behavioral approach focuses on personal characteristics.",
        "choice4": "The trait approach is more flexible than the behavioral approach, which offers limited leadership styles."
    },
    {
        "id": 202,
        "question": "203. According to the information provided, what is the primary motive of a leader?",
        "choice1": "Initiating action",
        "choice2": "Creating confidence",
        "choice3": "Co-ordination",
        "choice4": "Motivation"
    },
    {
        "id": 203,
        "question": "What is the basic premise behind trait theory?",
        "choice1": "Effective leaders are born, not made",
        "choice2": "Effective leaders are not needed in an organization",
        "choice3": "Effective leaders are made, not born",
        "choice4": "Effective leaders possess no traits"
    },
    {
        "id": 204,
        "question": "What is the focus of the trait theory?",
        "choice1": "The traits of a leader",
        "choice2": "The actions of a leader",
        "choice3": "The situation of a leader",
        "choice4": "The attitude of a leader"
    },
    {
        "id": 205,
        "question": "What are the advantages of the behavioral theory of leadership?",
        "choice1": "All of the above",
        "choice2": "Leaders can learn and decide what actions they want to implement",
        "choice3": "It suggests anyone is capable of becoming a leader",
        "choice4": "It allows leaders to be flexible and adapt based on their circumstances"
    },
    {
        "id": 206,
        "question": "What is the focus of the style theory?",
        "choice1": "The actions of a leader",
        "choice2": "The traits of a leader",
        "choice3": "The situation of a leader",
        "choice4": "The attitude of a leader"
    },
    {
        "id": 207,
        "question": "What does the behavioral leadership theory focus on?",
        "choice1": "How leaders behave",
        "choice2": "How leaders are born",
        "choice3": "How leaders are created",
        "choice4": "How leaders are hired"
    },
    {
        "id": 208,
        "question": "What is the great-man approach to leadership?",
        "choice1": "Leaders are born and not made",
        "choice2": "Leaders can be created based on learnable behavior",
        "choice3": "Leaders should be intellectually genius or omniscient prophets to succeed",
        "choice4": "Leaders can be anyone in an organization"
    },
    {
        "id": 209,
        "question": "What is the basic premise of trait theory?",
        "choice1": "Effective leaders are born, not made",
        "choice2": "Effective leaders are made, not born",
        "choice3": "Effective leaders possess no traits",
        "choice4": "Effective leaders are not needed in an organization"
    },
    {
        "id": 210,
        "question": "What is the significance of optimism in leaders?",
        "choice1": "All of the above",
        "choice2": "It helps them to plan ahead",
        "choice3": "It helps them to take action",
        "choice4": "It helps them to work towards a better future"
    },
    {
        "id": 211,
        "question": "How can leaders motivate employees?",
        "choice1": "By giving economic and non-economic rewards",
        "choice2": "By criticizing them",
        "choice3": "By punishing them",
        "choice4": "By firing them"
    },
    {
        "id": 212,
        "question": "What is the most important motive of a leader in an organization?",
        "choice1": "Reconciling personal interests with organizational goals",
        "choice2": "Maintaining a distance from subordinates",
        "choice3": "Micromanaging every task",
        "choice4": "Avoiding co-ordination"
    },
    {
        "id": 213,
        "question": "How can a leader create confidence in subordinates?",
        "choice1": "By explaining their role and giving guidelines",
        "choice2": "By not sharing work efforts",
        "choice3": "By not giving guidelines",
        "choice4": "By not expressing work efforts"
    },
    {
        "id": 214,
        "question": "What is the primary responsibility of a leader in an organization?",
        "choice1": "To provide clear and compelling direction",
        "choice2": "To make decisions for subordinates",
        "choice3": "To micromanage every task",
        "choice4": "To maintain a distance from subordinates"
    },
    {
        "id": 215,
        "question": "The contingency approach classifies leader behaviour into ___broad classes.",
        "choice1": "two",
        "choice2": "three",
        "choice3": "five",
        "choice4": "four"
    },
    {
        "id": 216,
        "question": "In which leadership approach puts emphasis on the importance of professional knowledge or technical expertise?",
        "choice1": "Contingency approach",
        "choice2": "Trait approach",
        "choice3": "The great-man approach",
        "choice4": "Behavioural approach"
    },
    {
        "id": 217,
        "question": "In which leadership approach focuses attention on the person in the job and not on the job itself?",
        "choice1": "Trait approach",
        "choice2": "The great-man approach",
        "choice3": "Behavioural approach",
        "choice4": "Contingency approach"
    },
    {
        "id": 218,
        "question": "In which stage of team development the team implements a plan for transitioning roles and recognizing members' contributions?",
        "choice1": "Adjourning",
        "choice2": "Norming",
        "choice3": "Storming",
        "choice4": "Performing"
    },
    {
        "id": 219,
        "question": "In which stage of team development members people realize that they can achieve work if they accept other viewpoints?",
        "choice1": "Norming",
        "choice2": "Adjourning",
        "choice3": "Forming",
        "choice4": "Storming"
    },
    {
        "id": 220,
        "question": "In which stage of team development members are treated as strangers?",
        "choice1": "Forming",
        "choice2": "Norming",
        "choice3": "Storming",
        "choice4": "Performing"
    },
    {
        "id": 221,
        "question": "Disadvantages of democtaric leaderdsip style?",
        "choice1": "time-consuming",
        "choice2": "leads to satisfied",
        "choice3": "leads to motivated",
        "choice4": "more skilled employees"
    },
    {
        "id": 222,
        "question": "Which one is storming stage in team development?",
        "choice1": "Team members still view themselves as individuals rather than part of the team",
        "choice2": "People feel part of the team",
        "choice3": "The team implements a plan for transitioning",
        "choice4": "fsafdssa"
    },
    {
        "id": 223,
        "question": "Which one is norming stage in team development?",
        "choice1": "People feel part of the team",
        "choice2": "Team acquaints and establishes ground rules",
        "choice3": "The team works in an open and trusting atmoshpere",
        "choice4": "The team conducts an assessment of the year"
    },
    {
        "id": 224,
        "question": "Which one is leader-centered decision making style?",
        "choice1": "One person make decision and direct other members",
        "choice2": "Decision are made with consensus of team members",
        "choice3": "Decision are made base on previous experience",
        "choice4": "Decision are made with team members"
    },
    {
        "id": 225,
        "question": "Which one is the self-directed type of team?",
        "choice1": "Teams are autonomous and don't need the same supervision",
        "choice2": "Team members come from various departments",
        "choice3": "Team is a group of workers who communicate and work together using digital tools",
        "choice4": "Teams include members of the same department"
    },
    {
        "id": 226,
        "question": "Which one is the functional type of team?",
        "choice1": "Teams include members of the same department",
        "choice2": "Team members come from various departments",
        "choice3": "Team is a group of workers who communicate and work together using digital tools",
        "choice4": "Teams are autonomous and don't need the same supervision"
    },
    {
        "id": 227,
        "question": "Which one is the cross-functional type of team?",
        "choice1": "Team members come from various departments",
        "choice2": "Teams include members of the same department",
        "choice3": "Teams are autonomous and don't need the same supervision",
        "choice4": "Team is a group of workers who communicate and work together using digital tools"
    },
    {
        "id": 228,
        "question": "Without________ the role of leadership is meaningless.",
        "choice1": "the goal",
        "choice2": "the right people",
        "choice3": "support",
        "choice4": "trust"
    },
    {
        "id": 229,
        "question": "Which one of these can not be interpreted as leadership?",
        "choice1": "Depends on authority",
        "choice2": "Getting others to follow",
        "choice3": "Getting people to do things willingly",
        "choice4": "The use of authority in decision making"
    },
    {
        "id": 230,
        "question": "Leader___________________.",
        "choice1": "develops people",
        "choice2": "takes credit",
        "choice3": "commands",
        "choice4": "drives employees"
    },
    {
        "id": 231,
        "question": "Manager_________________.",
        "choice1": "takes credit",
        "choice2": "generate enthusiasm.",
        "choice3": "fixes the breakdown",
        "choice4": "gives credits"
    },
    {
        "id": 232,
        "question": "Which one is not related to the approaches to leadership?",
        "choice1": "Autocratic",
        "choice2": "Trait",
        "choice3": "Behavioral",
        "choice4": "Contingency"
    },
    {
        "id": 233,
        "question": "Leader with Paternalistic leadership style says?",
        "choice1": "Do this as I do! This is how it must be done! Watch ME!",
        "choice2": "Make your own decision to achieve the goals!",
        "choice3": "Do what I tell you! You MUST do this NOW!",
        "choice4": "fafsf"
    },
    {
        "id": 234,
        "question": "Leader with Laisser-faire leadership style says?",
        "choice1": "Make your own decision to achieve the goals!",
        "choice2": "Do what I tell you! You MUST do this NOW!",
        "choice3": "Do this as I do! This is how it must be done! Watch ME!",
        "choice4": "You should respect and follow me."
    },
    {
        "id": 235,
        "question": "236. Leader with Autocratic leadership style says?",
        "choice1": "Do what I tell you! You MUST do this NOW!",
        "choice2": "Make your own decision to achieve the goals!",
        "choice3": "Do this as I do! This is how it must be done! Watch ME!",
        "choice4": "Follow me. I know everthing."
    },
    {
        "id": 236,
        "question": " 237. All of the following types of language not acceptable in public speeches EXCEPT",
        "choice1": "idioms",
        "choice2": "slangs",
        "choice3": "jargons",
        "choice4": "bad grammar"
    },
    {
        "id": 237,
        "question": "Almost all cultures have an equivalent of the English word “__________” to designate someone with special skills in public speaking",
        "choice1": "orator",
        "choice2": "lecturer",
        "choice3": "talker",
        "choice4": "speaker"
    },
    {
        "id": 238,
        "question": "Here are some tips on how to persuade others effectively: a. Focus on trust b. Be aware of your surroundings c. Find common interests d. Use facts and feelings",
        "choice1": "a.b",
        "choice2": "all of them",
        "choice3": "c.d",
        "choice4": "a.d"
    },
    {
        "id": 239,
        "question": "240. Which answer is wrong?",
        "choice1": "Don't use examples, and humour",
        "choice2": "Make eye contact with the audience to help establish a connection.",
        "choice3": "Ask questions and invite participation.",
        "choice4": "Learn from the Pros"
    },
    {
        "id": 240,
        "question": "Which answer is wrong?",
        "choice1": "Try read your talk, word-for-word, from a paper.",
        "choice2": "None of them",
        "choice3": "More practice standing and speaking before your speech.",
        "choice4": "To be a positive state of mind and a confident attitude."
    },
    {
        "id": 241,
        "question": "242. 1. Does the person seem flat, cool, and disinterested, or over-the-top and melodramatic? 2. Is the person making eye contact? If so, is it overly intense or just right? 3. Is there any physical contact? Is it appropriate to the situation? Evaluating nonverbal signals select the right matching.",
        "choice1": "1. Intensity 2. Eye contact 3. Touch",
        "choice2": "1. Intensity 2. Posture and gesture 3. Touch",
        "choice3": "1. Facial expression 2. Eye contact 3. Timing and place",
        "choice4": "1. Facial expression 2. Eye contact 3. Tone of voice"
    },
    {
        "id": 242,
        "question": " 243. Why eye contact is important?",
        "choice1": "The way you look at someone can communicate many things, including interest, affection, hostility, or attraction.",
        "choice2": "all of them",
        "choice3": "Because eye contact is not important in maintaining the flow of conversation",
        "choice4": "Because when you speak, other people “read” your voice in addition to listening to your words"
    },
    {
        "id": 243,
        "question": "Which are the facial expression?",
        "choice1": "happiness, anger, surprise, fear, and disgust",
        "choice2": "sadness, gestures, noise",
        "choice3": "only fear, and disgust",
        "choice4": "None of them"
    },
    {
        "id": 244,
        "question": "\"In some instances, what comes out of your mouth and what you communicate through your body language may be two totally different things. \" do you agree?",
        "choice1": "Yes, agree",
        "choice2": "Not everywhere",
        "choice3": "Disagree",
        "choice4": "Confused"
    },
    {
        "id": 245,
        "question": "What includes to body language?",
        "choice1": "the gestures, your posture, your tone of voice, eye contact",
        "choice2": "only gestures",
        "choice3": "your voice and eye contact",
        "choice4": "your words and voice"
    },
    {
        "id": 246,
        "question": "Which are the components of the transactional model ?",
        "choice1": "the encoding and decoding processes, the communicator, the message, the channel and noise",
        "choice2": "None of them",
        "choice3": "the Sender, the Receiver and the Channel",
        "choice4": "the channel and noise, transformer"
    },
    {
        "id": 247,
        "question": "Which are the part of Linear Model of communication? 1. Sender 2. Receiver 3. Transformer 4. Speaker 5. Channel",
        "choice1": "1.2.5",
        "choice2": "2.3.4",
        "choice3": "1.2.3",
        "choice4": "2.4.5"
    },
    {
        "id": 248,
        "question": " 249. \"Listening and critical thinking allow you to understand public dilemmas, form an opinion about them, and participate in resolving them. \" this statement is about……",
        "choice1": "Public",
        "choice2": "Personal",
        "choice3": "Ethics",
        "choice4": "Professional"
    },
    {
        "id": 249,
        "question": "\"Effective speaking skills make you more attractive to employers, enhancing your chances of securing employment and later advancing within your career. \" this statement is about……",
        "choice1": "Professional",
        "choice2": "Public life",
        "choice3": "Personal",
        "choice4": "Ethics"
    },
    {
        "id": 250,
        "question": "\"It may be for a special event, such as a toast at a wedding. We may be asked to give a eulogy at a funeral for a friend or loved one. \" this statement is about……",
        "choice1": "Personal",
        "choice2": "Public life",
        "choice3": "Professional",
        "choice4": "None of them"
    },
    {
        "id": 251,
        "question": "One of the 1st task of a speaker is to",
        "choice1": "Gain the listeners attention",
        "choice2": "Motivate the audience to action",
        "choice3": "Secure or reinforce good will or respect from the speaker",
        "choice4": "Prepare the audience for the discussion to follow"
    },
    {
        "id": 252,
        "question": "which are the tips on how to persuade others effectively?",
        "choice1": "Focus on trust, Find common interests",
        "choice2": "Focus on your feelings, Be aware of your interests",
        "choice3": "Use facts and feelings, don't look at your listener",
        "choice4": "With body language, hiding emotions."
    },
    {
        "id": 253,
        "question": "The ironic feature of public speaking is that ___________ .",
        "choice1": "while we recognize that it is an important skill to have, many of us do not like or want to give speeches.",
        "choice2": "it has been formally taught for dozen of years.",
        "choice3": "Only involves the audience",
        "choice4": "Is a personal involvement"
    },
    {
        "id": 254,
        "question": "What are some examples of analytical research skills?",
        "choice1": "Investigation, metrics, data collection",
        "choice2": "Data interpretation, judgment, process management",
        "choice3": "Problem sensitivity, active listening, teamwork",
        "choice4": "Budgeting, restructuring, strategic planning"
    },
    {
        "id": 255,
        "question": "What is data analysis?",
        "choice1": "The ability to examine a large volume of data and identify trends",
        "choice2": "The ability to evaluate and organize complicated issues",
        "choice3": "The ability to collect data and research a topic",
        "choice4": "The ability to think creatively and outside the box"
    },
    {
        "id": 256,
        "question": "What is critical thinking?",
        "choice1": "The ability to evaluate information and make a decision based on findings",
        "choice2": "The ability to analyze a large volume of data and identify trends",
        "choice3": "The ability to collect data and research a topic",
        "choice4": "The ability to think creatively and outside the box"
    },
    {
        "id": 257,
        "question": "Which of the following is NOT a type of analytical skill?",
        "choice1": "Strategic planning",
        "choice2": "Creativity",
        "choice3": "Communication",
        "choice4": "Critical thinking"
    },
    {
        "id": 258,
        "question": "What is an example of using analytical skills to solve a problem?",
        "choice1": "Reviewing data from different sources, integrating new information, and making a decision based on observations",
        "choice2": "Coming up with a creative solution to a problem",
        "choice3": "Asking others for their opinions and following their advice",
        "choice4": "Following a set of rules and procedures without deviation"
    },
    {
        "id": 259,
        "question": "What are some ways in which analytical skills can be used?",
        "choice1": "Detecting patterns, observing, interpreting data, making decisions",
        "choice2": "Auditing, benchmarking, correlating",
        "choice3": "Brainstorming, collaborating, optimizing",
        "choice4": "Reading and understanding information, communicating findings, conducting presentations"
    },
    {
        "id": 260,
        "question": "Why do employers value employees with analytical skills?",
        "choice1": "Because they can help solve a company's problems and improve its overall productivity and success",
        "choice2": "Because they are always right",
        "choice3": "Because they are good at memorizing information",
        "choice4": "Because they are good at following orders"
    },
    {
        "id": 261,
        "question": "What are some behavioral indicators of analytical thinkers?",
        "choice1": "Data collection, critical examination, identification of logical outcomes",
        "choice2": "Creativity, optimism, enthusiasm",
        "choice3": "Decision-making, problem sensitivity, written communication",
        "choice4": "Deductive reasoning, strategic planning, teamwork"
    },
    {
        "id": 262,
        "question": "What is analytical thinking?",
        "choice1": "The ability to evaluate and organize complicated issues",
        "choice2": "The ability to think creatively and outside the box",
        "choice3": "The ability to criticize and find flaws in others' ideas",
        "choice4": "The ability to empathize and understand others' perspectives"
    },
    {
        "id": 263,
        "question": "What are the four main types of \"thinking skills\"?",
        "choice1": "Convergent, divergent, critical, creative",
        "choice2": "Rational, objective, subjective, moral",
        "choice3": "Logical, analytical, intuitive, emotional",
        "choice4": "Critical, convergent, creative, ethical"
    },
    {
        "id": 264,
        "question": "What is body language?",
        "choice1": "The use of physical behavior, expressions, and mannerisms to communicate nonverbally.",
        "choice2": "The use of physical behavior, expressions, and mannerisms to communicate verbally.",
        "choice3": "The use of words to communicate nonverbally.",
        "choice4": "The use of silence to communicate nonverbally."
    },
    {
        "id": 265,
        "question": "266. Which model of communication is seen as an ongoing, circular process?",
        "choice1": "The transactional model of communication.",
        "choice2": "The linear model of communication.",
        "choice3": "The nonverbal model of communication.",
        "choice4": "The contextual model of communication."
    },
    {
        "id": 266,
        "question": "267. What is the linear model of communication?",
        "choice1": "It is a model of communication proposed by Shannon and Weaver for radio and television transmission.",
        "choice2": "It is a model of communication that emphasizes the importance of context.",
        "choice3": "It is a circular model of communication proposed by Barnlund.",
        "choice4": "It is a model of communication that emphasizes the importance of body language."
    },
    {
        "id": 267,
        "question": "268. Which of the following is NOT a type of the visual aids for presentations?",
        "choice1": "Audio recording",
        "choice2": "Graphs",
        "choice3": "Flip charts",
        "choice4": "Images"
    },
    {
        "id": 268,
        "question": "How do you ensure that your delivery is clear?",
        "choice1": "All of the above",
        "choice2": "Make sure only important points are outlined on the slides",
        "choice3": "Speak at an appropriate pace and volume",
        "choice4": "Practise"
    },
    {
        "id": 269,
        "question": "Which of the following is NOT a technique for effective delivery of the presentation?",
        "choice1": "Walking style",
        "choice2": "Voice",
        "choice3": "Pace",
        "choice4": "Volume"
    },
    {
        "id": 270,
        "question": "How to deliver a successful introduction in your presentation?",
        "choice1": "All of the above",
        "choice2": "State your presentation's purpose",
        "choice3": "Introduce your general topic",
        "choice4": "Explain your topic area"
    },
    {
        "id": 271,
        "question": "What to say in the Introduction?",
        "choice1": "Hello everyone…..",
        "choice2": "This graph shows…..",
        "choice3": "To sum up……",
        "choice4": "Are there any questions?"
    },
    {
        "id": 272,
        "question": "Which of the following things you should not do if something goes wrong during your presentation?",
        "choice1": "Don't smile",
        "choice2": "Remain calm",
        "choice3": "Apologise and move on",
        "choice4": "Don't panic"
    },
    {
        "id": 273,
        "question": "What are the effective ways to engage your audience?",
        "choice1": "All of the above",
        "choice2": "Eye contact",
        "choice3": "Body posture",
        "choice4": "Gestures"
    },
    {
        "id": 274,
        "question": "In which section do you need to capture the attention of the audience and give them a good reason to continue listening?",
        "choice1": "Introduction",
        "choice2": "Conclusion",
        "choice3": "All of the above",
        "choice4": "Main body"
    },
    {
        "id": 275,
        "question": "In which part of the presentation you should greet the audience and introduce yourself?",
        "choice1": "At the beginning of the presentation",
        "choice2": "At the end of the presentation",
        "choice3": "All of the above",
        "choice4": "In the middle of the presentation"
    },
    {
        "id": 276,
        "question": "In which section do you show a preview of the organisation of your presentation?",
        "choice1": "Introduction",
        "choice2": "All of the above",
        "choice3": "Conclusion",
        "choice4": "Main body"
    },
    {
        "id": 277,
        "question": "In which section of the presentation you should thank the audience for listening and invite questions?",
        "choice1": "Conclusion",
        "choice2": "All of the above",
        "choice3": "Introduction",
        "choice4": "Main body"
    },
    {
        "id": 278,
        "question": "In which section of the presentation are you going to restate the topic and purpose of your presentation?",
        "choice1": "Conclusion",
        "choice2": "Introduction",
        "choice3": "All of the above",
        "choice4": "Main body"
    },
    {
        "id": 279,
        "question": "Sums up important points and repeats the main message in the section of ___________",
        "choice1": "Conclusion",
        "choice2": "Main body",
        "choice3": "Introduction",
        "choice4": "All of the above"
    },
    {
        "id": 280,
        "question": "In which section main points should be addressed one by one with supporting evidence and examples?",
        "choice1": "Main body",
        "choice2": "Introduction",
        "choice3": "All of the above",
        "choice4": "Conclusion"
    },
    {
        "id": 281,
        "question": "Introduce your general topic in the ______________section of your presentation.",
        "choice1": "Introduction",
        "choice2": "All of the above",
        "choice3": "Main body",
        "choice4": "Conclusion"
    },
    {
        "id": 282,
        "question": "In which section do you state the purpose of your presentation?",
        "choice1": "Introduction",
        "choice2": "All of the above",
        "choice3": "Main body",
        "choice4": "Conclusion"
    },
    {
        "id": 283,
        "question": "The__________ of the presentation is where you can share the details of your main message and any other important points.",
        "choice1": "Main body",
        "choice2": "Conclusion",
        "choice3": "Introduction",
        "choice4": "All of the above"
    },
    {
        "id": 284,
        "question": "What is the important section of any presentation?",
        "choice1": "All of the above",
        "choice2": "Introduction",
        "choice3": "Conclusion",
        "choice4": "Main body"
    },
    {
        "id": 285,
        "question": "What happens when your verbal and nonverbal messages are mixed?",
        "choice1": "The listener will be confused and have to choose which message to believe.",
        "choice2": "The listener will believe your nonverbal message.",
        "choice3": "The listener will believe your verbal message.",
        "choice4": "The listener will not be affected by the mixed messages."
    },
    {
        "id": 286,
        "question": "287. What is the difference between verbal and nonverbal communication?",
        "choice1": "Verbal communication and nonverbal communication are both important and work together.",
        "choice2": "Verbal communication involves words while nonverbal communication involves silence.",
        "choice3": "Verbal communication is conscious while nonverbal communication is unconscious.",
        "choice4": "Verbal communication is more important than nonverbal communication."
    },
    {
        "id": 287,
        "question": "288. What is the importance of space in communication?",
        "choice1": "We all have a need for physical space and invading someone's space can make them feel uncomfortable.",
        "choice2": "It is important in maintaining the flow of conversation and for gauging the other person's interest and response.",
        "choice3": "It can communicate interest, affection, hostility, or attraction.",
        "choice4": "It is a natural, unconscious language that broadcasts your true feelings and intentions."
    },
    {
        "id": 288,
        "question": "289. Which type of nonverbal communication involves communicating through touch?",
        "choice1": "Touch.",
        "choice2": "Facial expressions.",
        "choice3": "Body movement and posture.",
        "choice4": "Gestures."
    },
    {
        "id": 289,
        "question": "290. Why is it important to be careful of how you use gestures?",
        "choice1": "Because the meaning of some gestures can be very different across cultures.",
        "choice2": "Because they are woven into the fabric of our daily lives.",
        "choice3": "Because they are a natural, unconscious language that broadcasts your true feelings and intentions.",
        "choice4": "Because they can communicate many things, including interest, affection, hostility, or attraction."
    },
    {
        "id": 290,
        "question": "291. Which type of nonverbal communication is especially important because the visual sense is dominant for most people?",
        "choice1": "Eye contact.",
        "choice2": "Facial expressions.",
        "choice3": "Body movement and posture.",
        "choice4": "Gestures."
    },
    {
        "id": 291,
        "question": "292. What type of nonverbal communication includes your posture, bearing, stance, and the subtle movements you make?",
        "choice1": "Body movement and posture.",
        "choice2": "Eye contact.",
        "choice3": "Gestures.",
        "choice4": "Facial expressions."
    },
    {
        "id": 292,
        "question": "293. Which of the following is NOT the hack to eliminate distractions from your life?",
        "choice1": "Keep your office door open",
        "choice2": "Turn off all notifications on your phone",
        "choice3": "Use “Do Not Disturb” functions on chat systems",
        "choice4": "Don’t browse social media at work at all"
    },
    {
        "id": 293,
        "question": "Which of the following is NOT a good example of time management?",
        "choice1": "Not distinguishing between work and rest, mixing them",
        "choice2": "Breaking Down Big Tasks",
        "choice3": "Prioritizing",
        "choice4": "Working From the Calendar"
    },
    {
        "id": 294,
        "question": "What does task prioritization mean?",
        "choice1": "Sort things by order, starting with the most important",
        "choice2": "All of the above",
        "choice3": "Comparison of works",
        "choice4": "Finding the least important things"
    },
    {
        "id": 295,
        "question": "What is usually done after the end of a pomodoro in the Pomodoro technique?",
        "choice1": "take a 5-minute break",
        "choice2": "sleep more",
        "choice3": "take a long trip",
        "choice4": "work harder"
    },
    {
        "id": 296,
        "question": "Good time management enables you to _____________",
        "choice1": "achieve greater levels of performance",
        "choice2": "do whatever you want",
        "choice3": "sleep more",
        "choice4": "work harder"
    },
    {
        "id": 297,
        "question": "Which tasks are the \"Plan\" quadrant of the Eisenhower Matrix intended for?",
        "choice1": "Tasks that are important, but not urgent",
        "choice2": "Tasks that are urgent, but not important",
        "choice3": "Tasks that are neither important nor urgent",
        "choice4": "Tasks that are both urgent and important"
    },
    {
        "id": 298,
        "question": "Which tasks are the \"Delete\" (\"Eliminate\") quadrant of the Eisenhower Matrix intended for?",
        "choice1": "Tasks that are neither important nor urgent",
        "choice2": "Tasks that are urgent, but not important",
        "choice3": "Tasks that are both urgent and important",
        "choice4": "Tasks that are important, but not urgent"
    },
    {
        "id": 299,
        "question": "Which tasks are the \"Delegate\" quadrant of the Eisenhower Matrix intended for?",
        "choice1": "Tasks that are urgent, but not important",
        "choice2": "Tasks that are both urgent and important",
        "choice3": "Tasks that are important, but not urgent",
        "choice4": "Tasks that are neither important nor urgent"
    },
    {
        "id": 300,
        "question": "Which tasks are the \"Do\" quadrant of the Eisenhower Matrix intended for?",
        "choice1": "Tasks that are both urgent and important",
        "choice2": "Tasks that are neither important nor urgent",
        "choice3": "Tasks that are urgent, but not important",
        "choice4": "Tasks that are important, but not urgent"
    },
    {
        "id": 301,
        "question": "With the Pomodoro method, you set a timer for __________ minutes.",
        "choice1": "25",
        "choice2": "10",
        "choice3": "15",
        "choice4": "5"
    },
    {
        "id": 302,
        "question": "According to what principle can you prioritise tasks in the Eisenhower Matrix?",
        "choice1": "Importance and urgency",
        "choice2": "Importance and impression",
        "choice3": "Productivity and passion",
        "choice4": "Urgency and productivity"
    },
    {
        "id": 303,
        "question": "Which of the following is considered a time management technique?",
        "choice1": "All of the above",
        "choice2": "Pareto Analysis",
        "choice3": "Eisenhower Matrix",
        "choice4": "Pomodoro Technique"
    },
    {
        "id": 304,
        "question": "Which of the following is NOT considered a time management technique?",
        "choice1": "Correlation Matrix",
        "choice2": "Eisenhower Matrix",
        "choice3": "Pareto Analysis",
        "choice4": "Pomodoro Technique"
    },
    {
        "id": 305,
        "question": "What enables good time management to achieve?",
        "choice1": "All of the above",
        "choice2": "bigger and better results in less time",
        "choice3": "productivity",
        "choice4": "greater levels of performance"
    },
    {
        "id": 306,
        "question": "What is the right percentage of the Pareto Analysis?",
        "choice1": "80/20 rule",
        "choice2": "50/50 rule",
        "choice3": "70/30 rule",
        "choice4": "60/40 rule"
    },
    {
        "id": 307,
        "question": "Who developed the Pomodoro technique?",
        "choice1": "Francesco Cirillo",
        "choice2": "David Dwight Eisenhower",
        "choice3": "Vilfredo Pareto",
        "choice4": "Edward de Bono"
    },
    {
        "id": 308,
        "question": "Who created the 80/20 method?",
        "choice1": "Vilfredo Pareto",
        "choice2": "Milton Erickson",
        "choice3": "Edward de Bono",
        "choice4": "David Dwight Eisenhower"
    },
    {
        "id": 309,
        "question": "One of the guiding principles of time management, in general, is the ______ principle, also known as the 80/20 rule.",
        "choice1": "Pareto",
        "choice2": "Pomodoro",
        "choice3": "Eisenhower",
        "choice4": "All of the above"
    },
    {
        "id": 310,
        "question": "What is the Eisenhower Matrix?",
        "choice1": "A time management tool to help you organize your tasks into four separate quadrants, sorting them by important vs. unimportant and",
        "choice2": "A technique created by Francesco Cirillo to help you prioritize tasks",
        "choice3": "A tool to automate repetitive tasks",
        "choice4": "A method to eliminate distractions from your life"
    },
    {
        "id": 311,
        "question": " 312. How long should the Pomodoro cycle be?",
        "choice1": "25 minutes of work, 5 minutes of break",
        "choice2": "60 minutes of work, 30 minutes of break",
        "choice3": "52 minutes of work, 17 minutes of break",
        "choice4": "90 minutes of work, 10 minutes of break"
    },
    {
        "id": 312,
        "question": "What is the goal of Pareto analysis?",
        "choice1": "To help you prioritize tasks that are most effective at solving problems",
        "choice2": "To set a timer for 25 minutes, work on a single task with your full focus, then take a 5-minute break to get up",
        "choice3": "To automate repetitive tasks",
        "choice4": "To organize your tasks into four separate quadrants, sorting them by important vs. unimportant and urgent vs. not urgent"
    },
    {
        "id": 313,
        "question": " 314. How can you eliminate distractions from your life?",
        "choice1": "All of the above",
        "choice2": "Leaving your phone in odd places that prevent you from immediately finding it",
        "choice3": "Turning off all notifications on your phone, computer, and tablet",
        "choice4": "Working with headphones as people are less likely to approach you with a non-urgent"
    },
    {
        "id": 314,
        "question": "What are some examples of tasks that can be automated?",
        "choice1": "All of the above",
        "choice2": "Setting reminders on Google Calendar so you never forget anything",
        "choice3": "Creating spreadsheet templates for reports you have to do weekly/monthly",
        "choice4": "Automatically filling online forms using LastPass, saving all your passwords in one place"
    },
    {
        "id": 315,
        "question": "What is the key to working smarter?",
        "choice1": "Using technology to automate daily repetitive tasks",
        "choice2": "Planning your day the night before",
        "choice3": "Having no distractions in your life",
        "choice4": "Working for 25 minutes and then taking a 5-minute break, repeatedly"
    },
    {
        "id": 316,
        "question": "What is the benefit of planning your day the night before?",
        "choice1": "All of the above",
        "choice2": "There won’t be any room for procrastination in the morning",
        "choice3": "You'll be better prepared mentally for the challenges ahead before waking up",
        "choice4": "You'll work faster and smoother than ever before"
    },
    {
        "id": 317,
        "question": "What is the Eisenhower Matrix?",
        "choice1": "A method to organize tasks into four separate quadrants",
        "choice2": "A technique that consists of working for 25 minutes and then taking a 5-minute break, repeatedly",
        "choice3": "A time management technique developed by Francesco Cirillo",
        "choice4": "A hack to eliminate distractions from your life"
    },
    {
        "id": 318,
        "question": "What is the Pomodoro Technique?",
        "choice1": "A technique that consists of working for 25 minutes and then taking a 5-minute break, repeatedly",
        "choice2": "A technique created by Francesco Cirillo that says 20% of actions are responsible for 80% of outcomes",
        "choice3": "A method to organize tasks into four separate quadrants",
        "choice4": "A hack to eliminate distractions from your life"
    },
    {
        "id": 319,
        "question": "What is the 80/20 rule?",
        "choice1": "It's a technique created by Vilfredo Pareto that says 20% of actions are responsible for 80% of outcomes",
        "choice2": "It's a hack to eliminate distractions from your life",
        "choice3": "It's a method to organize tasks into four separate quadrants",
        "choice4": "It's a time management technique developed by Francesco Cirillo"
    },
    {
        "id": 320,
        "question": "Which actions below that can you used to reduce your stress?",
        "choice1": "Reducing the negative emotional with emotional focused coping",
        "choice2": "Expending conscious effort to look for another stress",
        "choice3": "Sharing the problem with your boss for long time",
        "choice4": "Seeking to master for adding kind of stress or conflict"
    },
    {
        "id": 321,
        "question": "What you can do in order to adapt to the stressor?",
        "choice1": "Reframe problems",
        "choice2": "Express your feelings instead of bottling them up",
        "choice3": "Try to view stressful situations from a more negative perspective",
        "choice4": "Procrastinate"
    },
    {
        "id": 322,
        "question": "Which is not related to the 4A's of stress management?",
        "choice1": "alignment",
        "choice2": "adapt",
        "choice3": "avoid",
        "choice4": "alter"
    },
    {
        "id": 323,
        "question": "What you can do in order to boost low self-esteem?",
        "choice1": "Let go of negative thoughts",
        "choice2": "Think about something you are not good at",
        "choice3": "Spend time with people who make you feel dreadful about yourself",
        "choice4": "Stay physically inactive"
    },
    {
        "id": 324,
        "question": "Chooses behavioural effects of stress 1) headaches 2) anxiety 3)depression 4) overeating 5) underrating drug 6) alcohol abuse 7) sleep disturbances 8) social withdrawal",
        "choice1": "4,5,6,8",
        "choice2": "All of them",
        "choice3": "2.30",
        "choice4": "1,7,8"
    },
    {
        "id": 325,
        "question": "Choose psyhological strains of stress 1) confusion 2) anxiety 3) depression 4)overeating 5) underrating drug",
        "choice1": "1,2,3",
        "choice2": "All of them",
        "choice3": "4.50",
        "choice4": "2,3,4"
    },
    {
        "id": 326,
        "question": "Choose phsyical conditions of stress 1) headaches 2) anxiety 3) depression 4) overeating 5) underrating drug 6) alcohol abuse 7) sleep disturbances",
        "choice1": "1.70",
        "choice2": "2.30",
        "choice3": "1",
        "choice4": "4,5,6"
    },
    {
        "id": 327,
        "question": "What you may feel when you are stressed? 1. anxious 2. afraid 3. restless 4. irritable 5. focused or unmotivated 6.sad",
        "choice1": "1,2,3,4,6",
        "choice2": "1,2,4,6",
        "choice3": "all of them",
        "choice4": "1,2,3,6"
    },
    {
        "id": 328,
        "question": "How we can avoid stress in the workplace?",
        "choice1": "Look for opportunities for self-development",
        "choice2": "Choose unrealistic goals and move towards them gradually",
        "choice3": "Don't learn from failures or mistakes",
        "choice4": "Don’t accept support from colleagues or friends."
    },
    {
        "id": 329,
        "question": "330. High levels of stress in the workplace can not lead to:",
        "choice1": "Superior employee/workplace relationships",
        "choice2": "Poor decision-making by individuals",
        "choice3": "Increased sickness and absence, with ongoing costs to the organisation.",
        "choice4": "An increase in mistakes, which in turn may lead to customer or client complaints."
    },
    {
        "id": 330,
        "question": "Stress narrows your ability to ______",
        "choice1": "enjoy life",
        "choice2": "think uncertain",
        "choice3": "function ineffectively",
        "choice4": "think unclearly"
    },
    {
        "id": 331,
        "question": "Physical exercise helps to improve_______ 1) sleep quality 2) improves emotional well-being 3) increase stress 4) reduces stress",
        "choice1": "1,2,4",
        "choice2": "all of them",
        "choice3": "1,2,3",
        "choice4": "1.20"
    },
    {
        "id": 332,
        "question": " 333. What is stressors?",
        "choice1": "workload",
        "choice2": "physical exercise",
        "choice3": "social activities",
        "choice4": "prioritization"
    },
    {
        "id": 333,
        "question": "Which statement is incorrect about the stess",
        "choice1": "too much stress can motivate you",
        "choice2": "some stress is actually beneficial",
        "choice3": "Stress affects us all",
        "choice4": "a little stress is OK"
    },
    {
        "id": 334,
        "question": "Please select stress management techniques",
        "choice1": "meditation",
        "choice2": "procrastination",
        "choice3": "minimize social activites",
        "choice4": "say \"yes\" to every offer"
    },
    {
        "id": 335,
        "question": "Which one is not related to the symptoms of stress?",
        "choice1": "decresed irritability",
        "choice2": "anxiety or feeling of panic",
        "choice3": "weight loss",
        "choice4": "easily frustrated"
    },
    {
        "id": 336,
        "question": "Which is not related to the prolonged stress effects?",
        "choice1": "motivational",
        "choice2": "physiological",
        "choice3": "behavioural",
        "choice4": "psychological"
    },
    {
        "id": 337,
        "question": "Physiological effects of stress",
        "choice1": "digestive issues",
        "choice2": "depression",
        "choice3": "social withdrawal",
        "choice4": "anxiety"
    },
    {
        "id": 338,
        "question": "Psychological effects of stress",
        "choice1": "depression",
        "choice2": "sleep disturbances",
        "choice3": "underrating drug",
        "choice4": "alcohol abuse"
    },
    {
        "id": 339,
        "question": "Behavioral effects of stress",
        "choice1": "overeating",
        "choice2": "anxiety",
        "choice3": "depression",
        "choice4": "headaches"
    },
    {
        "id": 340,
        "question": "What is corporate culture?",
        "choice1": "the beliefs and behaviors that define the interaction and management of a company's employees and management with external",
        "choice2": "The physical structure of a company's office",
        "choice3": "The dress codes and working hours of a company",
        "choice4": "The customer satisfaction of a company"
    },
    {
        "id": 341,
        "question": "What is the purpose of a vision or mission statement in a company?",
        "choice1": "To guide a company's values and provide purpose",
        "choice2": "To invest in people",
        "choice3": "To provide guidelines for employee behavior",
        "choice4": "To serve customers and adhere to professional standards"
    },
    {
        "id": 342,
        "question": "What are the core of a company's culture?",
        "choice1": "The values of a company",
        "choice2": "The turnover rate of a company",
        "choice3": "The dress codes and working hours of a company",
        "choice4": "The customer satisfaction of a company"
    },
    {
        "id": 343,
        "question": "What is the importance of experiences in a company's culture?",
        "choice1": "To reinforce company values in daily life",
        "choice2": "To serve customers and adhere to professional standards",
        "choice3": "To invest in people",
        "choice4": "To provide guidelines for employee behavior"
    },
    {
        "id": 344,
        "question": "Why is recruitment important for building a coherent culture in a company?",
        "choice1": "Recruitment ensures that people share the core values of a company",
        "choice2": "Recruitment ensures a diverse workforce",
        "choice3": "Recruitment helps to establish company values",
        "choice4": "Recruitment increases customer satisfaction"
    },
    {
        "id": 345,
        "question": "What is the importance of narrative in creating a company's culture?",
        "choice1": "To turn a company's history into a story that is part of its sustainable culture",
        "choice2": "To provide guidelines for employee behavior",
        "choice3": "To invest in people",
        "choice4": "To serve customers and adhere to professional standards"
    },
    {
        "id": 346,
        "question": "How does location influence a company's culture?",
        "choice1": "location influences the values and behaviors of people in the workplace",
        "choice2": "Location affects the technology used by a company",
        "choice3": "Location determines the dress code of a company",
        "choice4": "Location affects the turnover rate of a company"
    },
    {
        "id": 347,
        "question": "Which of the following is NOT a component of a great culture?",
        "choice1": "Technology",
        "choice2": "Vision",
        "choice3": "Values",
        "choice4": "People"
    },
    {
        "id": 348,
        "question": "What is the first step in reviving or reshaping a culture in a company seeking change?",
        "choice1": "dentifying and understanding the six components of a great culture",
        "choice2": "Establishing a vision or mission statement",
        "choice3": "Creating a unique history and turning it into a story",
        "choice4": "Investing in people"
    },
    {
        "id": 349,
        "question": "What are the benefits of a strong corporate culture?",
        "choice1": "It determines an organization's commitment to high ethical standards",
        "choice2": "It decreases customer treatment",
        "choice3": "It eliminates employee benefits",
        "choice4": "It improves customer satisfaction"
    }
]

const correctBonus = 1;
const maxQuestions = parseInt(prompt("sual sayi elave edin(ancaq eded basqa yazi olmasin )").trim());

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions];
    getNewQuestion()
}
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem("mostRecentScore",score)
        return window.location.assign("./end.html")
    }
    questionCounter++;
    progressText.innerText = "Question "+questionCounter+"/"+ maxQuestions;

progressBarFull.style.width = `${(questionCounter/maxQuestions)*100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question


    let numbers = [1, 2, 3, 4]
    function getRandomElements(list) {
        return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 4)
    }
    let newList = getRandomElements(numbers)
    choices[0].innerText = currentQuestion["choice" + newList[0]]
    choices[1].innerText = currentQuestion["choice" + newList[1]]
    choices[2].innerText = currentQuestion["choice" + newList[2]]
    choices[3].innerText = currentQuestion["choice" + newList[3]]


    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.innerText

        const classToApply = selectedAnswer == currentQuestion.choice1 ? 'correct': 'incorrect';
        if (classToApply === 'correct') {
            incrementScore(correctBonus)
        }
selectedChoice.parentElement.classList.add(classToApply)
setTimeout(()=>{
    selectedChoice.parentElement.classList.remove(classToApply)
    getNewQuestion()

},1000)

        console.log(selectedAnswer === currentQuestion.choice1)
    })
})

incrementScore = num =>{
    score += num
    scoreText.innerText = score
}
startGame()
