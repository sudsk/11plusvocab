// Vocabulary words data
const vocabularyWords = [
  {
    word: 'errand',
    definition: 'A short trip to do a specific task, usually for someone else',
    example: 'Mom asked me to run an errand to the grocery store.',
    partOfSpeech: 'noun'
  },
  {
    word: 'profane',
    definition: 'Showing disrespect for sacred things; using rude or offensive language',
    example: 'The teacher asked the student not to use profane language in class.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perusal',
    definition: 'The action of reading or examining something carefully',
    example: 'After careful perusal of the menu, she ordered pasta.',
    partOfSpeech: 'noun'
  },
  {
    word: 'furtive',
    definition: 'Done secretly or quietly, trying not to be noticed',
    example: 'He cast a furtive glance around before sharing the secret.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'elementary',
    definition: 'Basic or simple; relating to the early stages of learning',
    example: 'These are elementary math problems that most children can solve.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'apprehend',
    definition: 'To arrest someone; or to understand or grasp an idea',
    example: 'The police were able to apprehend the thief quickly.',
    partOfSpeech: 'verb'
  },
  {
    word: 'pinnacle',
    definition: 'The highest point or level of something',
    example: 'Winning the gold medal was the pinnacle of her career.',
    partOfSpeech: 'noun'
  },
  {
    word: 'colt',
    definition: 'A young male horse',
    example: 'The colt ran playfully around the meadow.',
    partOfSpeech: 'noun'
  },
  {
    word: 'toll',
    definition: 'A payment for using a road or bridge; or the cost or damage caused by something',
    example: 'We had to pay a toll to cross the bridge.',
    partOfSpeech: 'noun'
  },
  {
    word: 'despot',
    definition: 'A ruler who has total power and uses it in a cruel way',
    example: 'The despot ruled the country with fear and threats.',
    partOfSpeech: 'noun'
  },
  {
    word: 'epitomise',
    definition: 'To be a perfect example of something',
    example: 'Her kindness epitomises what friendship should be.',
    partOfSpeech: 'verb'
  },
  {
    word: 'burden',
    definition: 'A heavy load that is difficult to carry; or a responsibility that causes worry',
    example: 'Carrying all the groceries was a burden for the small child.',
    partOfSpeech: 'noun'
  },
  {
    word: 'trammel',
    definition: 'A fishing net; or something that restricts freedom',
    example: 'The fisherman cast his trammel into the deep waters.',
    partOfSpeech: 'noun'
  },
  {
    word: 'delude',
    definition: 'To make someone believe something that is not true',
    example: 'Don\'t delude yourself into thinking this will be easy.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mirth',
    definition: 'Happiness and laughter',
    example: 'The party was filled with mirth and good cheer.',
    partOfSpeech: 'noun'
  },
  {
    word: 'bestow',
    definition: 'To give something as an honor or present',
    example: 'The queen will bestow medals on the brave soldiers.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prismatic',
    definition: 'Relating to or like a prism, especially in breaking light into colors',
    example: 'The crystal created prismatic patterns on the wall.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'iris',
    definition: 'The colored part of the eye; or a type of flower',
    example: 'She has beautiful blue irises in her eyes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'veteran',
    definition: 'Someone with lots of experience, especially a former soldier',
    example: 'As a veteran teacher, she knew how to handle difficult students.',
    partOfSpeech: 'noun'
  },
  {
    word: 'maverick',
    definition: 'An independent person who thinks and acts differently from others',
    example: 'Steve Jobs was known as a maverick in the tech industry.',
    partOfSpeech: 'noun'
  },
  {
    word: 'lurid',
    definition: 'Shocking or vivid in a distasteful way',
    example: 'The newspaper gave lurid details of the crime.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inept',
    definition: 'Having no skill; clumsy',
    example: 'His inept handling of the situation made things worse.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'renegade',
    definition: 'Someone who leaves one group or cause to join another that is opposed to it',
    example: 'He was seen as a renegade when he changed political parties.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pragmatic',
    definition: 'Dealing with things in a practical way',
    example: 'We need a pragmatic solution to this problem.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'whimsical',
    definition: 'Playfully quaint or fanciful, especially in an appealing way',
    example: 'The garden was decorated with whimsical statues of fairies.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intractable',
    definition: 'Hard to control or deal with',
    example: 'The disease proved intractable despite various treatments.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'mettle',
    definition: 'A person\'s ability to cope well with difficulties; courage and resilience',
    example: 'The challenge tested her mettle as a leader.',
    partOfSpeech: 'noun'
  },
  {
    word: 'phenomenon',
    definition: 'A fact or situation that can be observed to exist or happen',
    example: 'Scientists studied the phenomenon of lightning.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inflammatory',
    definition: 'Causing or able to cause anger or strong feelings',
    example: 'His inflammatory remarks sparked a heated debate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'deformity',
    definition: 'A physical abnormality, especially one present from birth',
    example: 'The accident left him with a slight deformity in his hand.',
    partOfSpeech: 'noun'
  },
  {
    word: 'giddily',
    definition: 'In a way that shows excitement and happiness',
    example: 'She laughed giddily when she heard the good news.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'ostentatious',
    definition: 'Displayed or done in a showy way to impress others',
    example: 'The mansion was filled with ostentatious decorations.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'accent',
    definition: 'A distinctive way of pronouncing words; or emphasis given to something',
    example: 'She speaks English with a French accent.',
    partOfSpeech: 'noun'
  },
  {
    word: 'snoop',
    definition: 'To investigate or look around secretly',
    example: 'She doesn\'t like people who snoop through her belongings.',
    partOfSpeech: 'verb'
  },
  {
    word: 'appease',
    definition: 'To calm or satisfy someone by giving them what they want',
    example: 'They tried to appease the angry customer with a free meal.',
    partOfSpeech: 'verb'
  },
  {
    word: 'down-to-earth',
    definition: 'Practical and realistic; without pretension',
    example: 'Despite being famous, she remains down-to-earth and friendly.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'lethargic',
    definition: 'Lacking energy; sluggish and apathetic',
    example: 'The hot weather made everyone feel lethargic.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'quaint',
    definition: 'Attractively unusual or old-fashioned',
    example: 'They stayed in a quaint little cottage in the countryside.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'accrue',
    definition: 'To accumulate or build up over time',
    example: 'Interest will accrue on your savings account.',
    partOfSpeech: 'verb'
  },
  {
    word: 'divulge',
    definition: 'To make known private information',
    example: 'She refused to divulge the secret recipe.',
    partOfSpeech: 'verb'
  },
  {
    word: 'irk',
    definition: 'To annoy or irritate',
    example: 'It irks me when people are late without calling.',
    partOfSpeech: 'verb'
  },
  {
    word: 'inkling',
    definition: 'A slight hint or suggestion',
    example: 'She had no inkling of what was about to happen.',
    partOfSpeech: 'noun'
  },
  {
    word: 'obliged',
    definition: 'Feeling or being indebted to someone for a favor',
    example: 'I\'m obliged to you for your help.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'enquiry',
    definition: 'A request for information',
    example: 'The school received several enquiries about enrollment.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inquiry',
    definition: 'A formal investigation',
    example: 'The police launched an inquiry into the incident.',
    partOfSpeech: 'noun'
  },
  {
    word: 'request',
    definition: 'The act of politely asking for something',
    example: 'She made a request for more time to complete the project.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gluttonous',
    definition: 'Excessively greedy, especially about food',
    example: 'The gluttonous king held feasts that lasted for days.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'impoverished',
    definition: 'Very poor and lacking basic necessities',
    example: 'The charity helps impoverished families in the region.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'affluent',
    definition: 'Having a lot of money and owning many things',
    example: 'They lived in an affluent neighborhood with large houses.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'feud',
    definition: 'A long and bitter quarrel between families or groups',
    example: 'The two families have been in a feud for generations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ruse',
    definition: 'A trick or plan used to deceive someone',
    example: 'The gift was just a ruse to get her to come to the surprise party.',
    partOfSpeech: 'noun'
  },
  {
    word: 'rouse',
    definition: 'To wake someone or make someone active or excited',
    example: 'It was difficult to rouse the children on the first day of school.',
    partOfSpeech: 'verb'
  },
  {
    word: 'niche',
    definition: 'A specialized segment of the market; or a comfortable position in life',
    example: 'The store found its niche selling handmade crafts.',
    partOfSpeech: 'noun'
  },
  {
    word: 'easel',
    definition: 'A wooden frame for holding a canvas while painting',
    example: 'The artist set up her easel in the park.',
    partOfSpeech: 'noun'
  },
  {
    word: 'confers',
    definition: 'To discuss something important; or to grant or bestow something',
    example: 'The president confers regularly with his advisors.',
    partOfSpeech: 'verb'
  },
  {
    word: 'flagship',
    definition: 'The best or most important product or service of an organization',
    example: 'This store is the flagship of the entire retail chain.',
    partOfSpeech: 'noun'
  },
  {
    word: 'profound',
    definition: 'Very great or intense; having deep insight or understanding',
    example: 'The book had a profound effect on her thinking.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'disreputable',
    definition: 'Not considered to be respectable in character or appearance',
    example: 'They warned her to stay away from the disreputable part of town.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'convoluted',
    definition: 'Extremely complex and difficult to follow',
    example: 'He gave a convoluted explanation that confused everyone.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'saturated',
    definition: 'Completely full or soaked with something',
    example: 'Her clothes were saturated with rain water.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'gully',
    definition: 'A deep narrow channel cut in the earth by running water',
    example: 'The rain created a gully along the side of the road.',
    partOfSpeech: 'noun'
  },
  {
    word: 'penalise',
    definition: 'To punish or put at a disadvantage',
    example: 'The team was penalised for breaking the rules.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fluctuate',
    definition: 'To rise and fall irregularly in number or amount',
    example: 'Stock prices tend to fluctuate throughout the day.',
    partOfSpeech: 'verb'
  },
  {
    word: 'garret',
    definition: 'A small, simple room at the top of a house, often under the roof',
    example: 'The starving artist lived in a garret in Paris.',
    partOfSpeech: 'noun'
  },
  {
    word: 'warren',
    definition: 'A network of rabbit burrows; or a crowded area with many connecting passages',
    example: 'The old part of the city was a warren of narrow streets.',
    partOfSpeech: 'noun'
  },
  {
    word: 'scandal',
    definition: 'An action or event that causes public outrage or shock',
    example: 'The politician\'s behavior caused a major scandal.',
    partOfSpeech: 'noun'
  },
  {
    word: 'diurnal',
    definition: 'Active during the day (opposite of nocturnal)',
    example: 'Most birds are diurnal creatures.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sprawled',
    definition: 'Sitting or lying with arms and legs spread out carelessly',
    example: 'The children were sprawled on the floor watching TV.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'audacity',
    definition: 'Boldness or daring, especially with confident disregard for rules or conventions',
    example: 'She had the audacity to question the teacher\'s methods.',
    partOfSpeech: 'noun'
  },
  {
    word: 'annotated',
    definition: 'Having notes added to provide explanation or comment',
    example: 'The professor gave us an annotated version of the poem.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'compiled',
    definition: 'Gathered and put together from different sources',
    example: 'She compiled a list of items needed for the trip.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'evoked',
    definition: 'Brought or recalled a feeling, memory, or image to mind',
    example: 'The song evoked memories of her childhood.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'cumulative',
    definition: 'Increasing or growing by accumulation or successive additions',
    example: 'The cumulative effect of lack of sleep affected his performance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dusky',
    definition: 'Somewhat dark in color; dimly lit, as at twilight',
    example: 'The room was filled with a dusky light as the sun set.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vague',
    definition: 'Not clearly expressed, understood, or thought out',
    example: 'She gave only a vague answer to my question.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'revelled',
    definition: 'Enjoyed oneself in a lively and noisy way',
    example: 'They revelled in their success after winning the championship.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'unfazed',
    definition: 'Not worried or perturbed by something that has happened',
    example: 'She remained unfazed by the sudden change of plans.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'endorse',
    definition: 'To publicly or officially support or approve of something',
    example: 'The athlete was paid to endorse the new sports drink.',
    partOfSpeech: 'verb'
  },
  {
    word: 'gable',
    definition: 'The triangular upper part of a wall at the end of a ridged roof',
    example: 'The house had decorative gables on both ends.',
    partOfSpeech: 'noun'
  },
  {
    word: 'steed',
    definition: 'A horse, especially one that is ridden (often used in literature)',
    example: 'The knight mounted his trusty steed.',
    partOfSpeech: 'noun'
  },
  {
    word: 'fruitstar',
    definition: 'A term possibly referring to a star-shaped fruit or a prominent fruit',
    example: 'The fruitstar was the centerpiece of the tropical display.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grapple',
    definition: 'To struggle or wrestle with someone or something',
    example: 'The police had to grapple with the suspect to make the arrest.',
    partOfSpeech: 'verb'
  },
  {
    word: 'thwart',
    definition: 'To prevent someone from accomplishing something',
    example: 'The bad weather thwarted our plans for a picnic.',
    partOfSpeech: 'verb'
  },
  {
    word: 'despise',
    definition: 'To feel strong dislike or hatred for someone or something',
    example: 'She despises people who are cruel to animals.',
    partOfSpeech: 'verb'
  },
  {
    word: 'gawdy',
    definition: 'Excessively showy or bright; (more commonly spelled gaudy)',
    example: 'The room was decorated with gawdy colors and patterns.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'austere',
    definition: 'Severe or strict in manner or appearance; simple and plain',
    example: 'The monastery followed an austere lifestyle.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'stringent',
    definition: 'Strict, precise, and exacting',
    example: 'The company has stringent quality control standards.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'waver',
    definition: 'To shake with a quivering motion; or to be indecisive',
    example: 'Her voice began to waver when she became nervous.',
    partOfSpeech: 'verb'
  }
];
