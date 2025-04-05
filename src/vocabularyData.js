const vocabularyWords = [
  {
    word: 'khaki',
    definition: 'A light yellowish-brown color; or a strong cotton fabric of this color often used for military uniforms',
    example: 'He wore khaki shorts and a white t-shirt for the safari.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'solicitor',
    definition: 'A type of lawyer who gives legal advice and prepares legal documents',
    example: 'They consulted a solicitor about buying the property.',
    partOfSpeech: 'noun'
  },
  {
    word: 'jaded',
    definition: 'Tired, bored, or lacking enthusiasm, typically after having too much of something',
    example: 'The jaded food critic had eaten at so many restaurants that nothing impressed him anymore.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'flounder',
    definition: 'To struggle mentally; to have difficulty doing something; or a type of flat fish',
    example: 'He floundered when trying to answer the difficult question.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'implicit',
    definition: 'Suggested or understood without being directly stated',
    example: 'There was an implicit agreement between them to never discuss the incident.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'poignant',
    definition: 'Evoking a keen sense of sadness or regret; touching or moving',
    example: 'The film tells a poignant story about a family separated by war.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'irrational',
    definition: 'Not logical or reasonable; not based on reason',
    example: 'Her fear of harmless garden spiders was irrational but real.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'bashful',
    definition: 'Shy and easily embarrassed',
    example: 'The bashful child hid behind his mother when introduced to strangers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'muscular',
    definition: 'Having well-developed muscles; strong and powerful',
    example: 'The athlete had a muscular build from years of training.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'flawless',
    definition: 'Perfect, without any defects or weaknesses',
    example: 'The diamond was completely flawless and worth a fortune.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'novel',
    definition: 'New and not previously known; or a fictional book of substantial length',
    example: 'Scientists discovered a novel way to produce clean energy.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'pompous',
    definition: 'Self-important or arrogant; showing an exaggerated sense of self-importance',
    example: 'The pompous official insisted on being addressed by his full title.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'combat',
    definition: 'Fighting or a battle, especially during war',
    example: 'The soldiers trained for combat in harsh conditions.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'turnabout',
    definition: 'A complete change of direction or opinion',
    example: 'Her turnabout on the issue surprised everyone who knew her.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grievance',
    definition: 'A real or imagined cause for complaint, especially unfair treatment',
    example: 'The employee filed a grievance about workplace discrimination.',
    partOfSpeech: 'noun'
  },
  {
    word: 'thaw',
    definition: 'To become warm enough for ice or snow to melt; or to become more friendly',
    example: 'Relations between the two countries began to thaw after years of tension.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'rejoice',
    definition: 'To feel or show great joy or delight',
    example: 'The whole town rejoiced when the local team won the championship.',
    partOfSpeech: 'verb'
  },
  {
    word: 'flustered',
    definition: 'Agitated, confused, or bothered',
    example: 'She became flustered when asked to speak in front of the large audience.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obsequiousness',
    definition: 'Obedient or attentive to an excessive or servile degree',
    example: 'His obsequiousness toward the boss made his colleagues uncomfortable.',
    partOfSpeech: 'noun'
  },
  {
    word: 'passive',
    definition: 'Accepting or allowing what happens without active response or resistance',
    example: 'He took a passive role in the discussion, listening but rarely speaking.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'refined',
    definition: 'Elegant and cultured in appearance, manner, or taste; or purified',
    example: 'She had a refined appreciation for classical music.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'watertight',
    definition: 'So tightly made or fitted that water cannot enter or escape',
    example: 'The submarine had to be completely watertight to operate safely.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'squander',
    definition: 'To waste something, especially money or opportunities, in a reckless way',
    example: 'He squandered his inheritance on expensive cars and parties.',
    partOfSpeech: 'verb'
  },
  {
    word: 'innovation',
    definition: 'A new method, idea, or product',
    example: 'The company is known for innovation in smartphone technology.',
    partOfSpeech: 'noun'
  },
  {
    word: 'barge',
    definition: 'A flat-bottomed boat for carrying freight; or to move forcefully or rudely',
    example: 'He barged into the room without knocking.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'meteorological spring',
    definition: 'The season defined by weather professionals based on temperature patterns, typically March to May in the Northern Hemisphere',
    example: 'Meteorological spring begins on March 1, while astronomical spring starts on the equinox.',
    partOfSpeech: 'noun'
  },
  {
    word: 'understate',
    definition: 'To describe something as less important or serious than it really is',
    example: 'To say he was "a bit upset" was to understate how angry he actually felt.',
    partOfSpeech: 'verb'
  },
  {
    word: 'inhibit',
    definition: 'To restrain, block, or suppress an action or process',
    example: 'The medication works by inhibiting the growth of bacteria.',
    partOfSpeech: 'verb'
  },
  {
    word: 'novice',
    definition: 'A person who is new to and inexperienced in a job, situation, or activity',
    example: 'As a novice skier, she stayed on the beginner slopes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'neophyte',
    definition: 'A beginner or a person who is new to a subject or activity',
    example: 'He was a neophyte in politics when he first ran for office.',
    partOfSpeech: 'noun'
  },
  {
    word: 'Abyssinian',
    definition: 'Relating to Abyssinia (now Ethiopia); or a breed of slender, short-haired cat',
    example: 'The Abyssinian cat is known for its ticked coat pattern and playful personality.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'territorial',
    definition: 'Relating to the ownership of an area of land; or aggressively defending what one perceives as one\'s territory',
    example: 'The dog was very territorial and barked at anyone who came near the yard.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'idiosyncrasy',
    definition: 'A peculiar or individual characteristic, habit, or mannerism',
    example: 'One of his idiosyncrasies was always arranging his books by color rather than by author.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pretentious',
    definition: 'Attempting to impress by affecting greater importance or merit than is actually possessed',
    example: 'His pretentious remarks about fine wine showed he knew little about the subject.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'consonance',
    definition: 'Agreement or harmony between opinions or actions; or repetition of consonant sounds in writing',
    example: 'The repeated "s" sounds create consonance in the phrase "sweet silent sleep."',
    partOfSpeech: 'noun'
  },
  {
    word: 'idiom',
    definition: 'A group of words with a meaning that is different from the meanings of the individual words',
    example: '"Under the weather" is an idiom that means feeling ill.',
    partOfSpeech: 'noun'
  },
  {
    word: 'confine',
    definition: 'To keep or restrict someone or something within certain limits of space, scope, or time',
    example: 'The prisoner was confined to a small cell.',
    partOfSpeech: 'verb'
  },
  {
    word: 'feasible',
    definition: 'Possible to do easily or conveniently; likely to work or be achieved',
    example: 'The engineer determined that the bridge design was feasible with the available materials.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'attainable',
    definition: 'Able to be achieved, accomplished, or acquired',
    example: 'With hard work, her goals were entirely attainable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'cheddar',
    definition: 'A hard, yellow cheese originally made in the village of Cheddar in England',
    example: 'He sprinkled grated cheddar over the top of the casserole.',
    partOfSpeech: 'noun'
  },
  {
    word: 'faze',
    definition: 'To disturb, disconcert, or daunt; to cause to be confused or perplexed',
    example: 'The tough questions from the audience didn\'t faze the experienced speaker.',
    partOfSpeech: 'verb'
  },
  {
    word: 'negate',
    definition: 'To deny the existence or truth of; to make ineffective or invalid',
    example: 'His later actions negated his earlier apology.',
    partOfSpeech: 'verb'
  },
  {
    word: 'conducive',
    definition: 'Making a certain situation or outcome likely or possible',
    example: 'A quiet environment is conducive to studying effectively.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'psoriasis',
    definition: 'A skin disease that causes red, itchy, scaly patches',
    example: 'She used a special cream to treat the psoriasis on her elbows.',
    partOfSpeech: 'noun'
  },
  {
    word: 'volatile',
    definition: 'Likely to change suddenly and unexpectedly, especially for the worse; or easily evaporating',
    example: 'The political situation remained volatile throughout the election.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'windfall',
    definition: 'An unexpected piece of good fortune, especially a large amount of money',
    example: 'The tax refund was a welcome windfall that helped pay off their debts.',
    partOfSpeech: 'noun'
  },
  {
    word: 'scissors',
    definition: 'A cutting instrument having two blades whose cutting edges slide past each other',
    example: 'She used scissors to cut the paper into shapes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grimaced',
    definition: 'Made an ugly, twisted expression on one\'s face expressing disgust, pain, or displeasure',
    example: 'He grimaced when he tasted the sour lemon.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'wince',
    definition: 'To make a slight involuntary grimace or shrinking movement due to pain or distress',
    example: 'She couldn\'t help but wince when the doctor gave her the injection.',
    partOfSpeech: 'verb'
  },
  {
    word: 'deviant',
    definition: 'Departing from usual or accepted standards, especially in social or sexual behavior',
    example: 'His deviant behavior made him an outcast in the community.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'reprobate',
    definition: 'An unprincipled person; someone rejected by God',
    example: 'The old reprobate was known throughout town for his bad behavior.',
    partOfSpeech: 'noun'
  },
  {
    word: 'trailblazer',
    definition: 'A person who makes a new track through wild country; a pioneer or innovator',
    example: 'She was a trailblazer for women\'s rights in the 1960s.',
    partOfSpeech: 'noun'
  },
  {
    word: 'domestic',
    definition: 'Relating to the running of a home or to family relations; or existing or occurring inside a particular country',
    example: 'He took care of all the domestic chores while his wife was away.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'beast of burden',
    definition: 'An animal used to carry heavy loads or perform other heavy work',
    example: 'The donkey has been used as a beast of burden for thousands of years.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'in the doghouse',
    definition: 'In trouble or disfavor with someone, especially after doing something wrong',
    example: 'He was in the doghouse with his wife after forgetting their anniversary.',
    partOfSpeech: 'idiom'
  },
  {
    word: 'against the clock',
    definition: 'With a limited amount of time available; in a race with time',
    example: 'The team worked against the clock to finish the project before the deadline.',
    partOfSpeech: 'idiom'
  },
  {
    word: 'quaff',
    definition: 'To drink (something, especially an alcoholic drink) heartily',
    example: 'The thirsty hikers quaffed their water after reaching the summit.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hearty',
    definition: 'Showing warm and heartfelt friendliness; or substantial, abundant, and filling (of food)',
    example: 'After the hike, they enjoyed a hearty meal of stew and bread.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'writhe',
    definition: 'To twist or contort the body, usually in pain',
    example: 'He writhed in agony after spraining his ankle.',
    partOfSpeech: 'verb'
  },
  {
    word: 'wield',
    definition: 'To hold and use (a weapon or tool); or to have and use (power or influence)',
    example: 'The knight wielded his sword against the dragon.',
    partOfSpeech: 'verb'
  },
  {
    word: 'heave',
    definition: 'To lift or haul something heavy with great effort; or to rise and fall rhythmically',
    example: 'It took three people to heave the piano up the stairs.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mope',
    definition: 'To be dejected and apathetic; to sulk',
    example: 'After losing the game, he spent the evening moping in his room.',
    partOfSpeech: 'verb'
  },
  {
    word: 'wade',
    definition: 'To walk through water, mud, or another substance that impedes movement',
    example: 'They had to wade across the shallow stream to reach the other side.',
    partOfSpeech: 'verb'
  },
  {
    word: 'confiscate',
    definition: 'To take or seize someone\'s property with authority',
    example: 'The teacher confiscated the cell phones during the exam.',
    partOfSpeech: 'verb'
  },
  {
    word: 'preen',
    definition: 'To clean or arrange one\'s feathers with the beak (of a bird); or to devote effort to making oneself look attractive',
    example: 'The peacock preened its feathers in a magnificent display.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hoist',
    definition: 'To raise or lift, especially by means of ropes or pulleys',
    example: 'The sailors hoisted the flag up the mast.',
    partOfSpeech: 'verb'
  },
  {
    word: 'calligraphy',
    definition: 'The art of beautiful handwriting',
    example: 'She studied calligraphy and created elegant wedding invitations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'concertina',
    definition: 'A small musical instrument similar to an accordion; or to fold or collapse in a manner resembling a concertina',
    example: 'The pages of the book concertina out to reveal a 3D scene.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'pendant',
    definition: 'A piece of jewelry that hangs from a chain worn around the neck',
    example: 'She wore a gold heart pendant that belonged to her grandmother.',
    partOfSpeech: 'noun'
  },
  {
    word: 'archery',
    definition: 'The sport or practice of shooting with a bow and arrows',
    example: 'She took up archery and soon became skilled at hitting the target.',
    partOfSpeech: 'noun'
  },
  {
    word: 'snake charmer',
    definition: 'A person who appears to hypnotize or control a snake, usually by playing music',
    example: 'The tourists watched in amazement as the snake charmer played his flute.',
    partOfSpeech: 'noun'
  },      
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
  },
  {
    word: 'scrutinise',
    definition: 'To examine something in detail and very carefully',
    example: 'The scientist scrutinised the sample under a microscope.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tuxedo',
    definition: 'A formal evening suit for men, typically with a black jacket and trousers, white shirt, and bow tie',
    example: 'He wore a black tuxedo to the wedding.',
    partOfSpeech: 'noun'
  },
  {
    word: 'monk',
    definition: 'A member of a religious community of men living under vows of poverty, chastity, and obedience',
    example: 'The monk spent hours each day in silent meditation.',
    partOfSpeech: 'noun'
  },
  {
    word: 'maggot',
    definition: 'The larva of a fly that feeds on decaying flesh or waste',
    example: 'Maggots had begun to appear in the old food.',
    partOfSpeech: 'noun'
  },
  {
    word: 'obliged',
    definition: 'Feeling or being indebted to someone for a favor or service',
    example: 'I\'m much obliged to you for your help.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'displease',
    definition: 'To cause someone to feel annoyed or unhappy',
    example: 'His rude comments displeased the teacher.',
    partOfSpeech: 'verb'
  },
  {
    word: 'avid',
    definition: 'Having or showing a keen interest in or enthusiasm for something',
    example: 'She is an avid reader and finishes several books each week.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'trinket',
    definition: 'A small ornament or item of jewelry that is of little value',
    example: 'She collected trinkets from every country she visited.',
    partOfSpeech: 'noun'
  },
  {
    word: 'perpetrator',
    definition: 'A person who carries out a harmful or illegal act',
    example: 'The police are still searching for the perpetrator of the crime.',
    partOfSpeech: 'noun'
  },
  {
    word: 'coarse',
    definition: 'Rough or harsh in texture, appearance, or quality',
    example: 'His skin became coarse from years of outdoor work.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sole',
    definition: 'Being the only one; single',
    example: 'She was the sole survivor of the accident.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'altar',
    definition: 'A table or raised structure where religious ceremonies are performed',
    example: 'The bride and groom stood at the altar to exchange their vows.',
    partOfSpeech: 'noun'
  },
  {
    word: 'alter',
    definition: 'To change or make different in some way',
    example: 'They had to alter their plans because of the bad weather.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mourning',
    definition: 'The expression of deep sorrow for someone who has died',
    example: 'The family wore black during the period of mourning.',
    partOfSpeech: 'noun'
  },
  {
    word: 'desert',
    definition: 'A dry, barren area of land with little or no vegetation; or to abandon someone or something',
    example: 'The Sahara is the largest hot desert in the world.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'flop',
    definition: 'To fall or drop heavily and clumsily; or a complete failure',
    example: 'The tired dog flopped down onto its bed.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'winsome',
    definition: 'Attractive or appealing in a fresh, innocent way',
    example: 'The child\'s winsome smile captured everyone\'s heart.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'eschews',
    definition: 'Deliberately avoids or keeps away from something',
    example: 'She eschews social media, preferring face-to-face conversations.',
    partOfSpeech: 'verb (third person)'
  },
  {
    word: 'abstain',
    definition: 'To restrain oneself from doing or enjoying something',
    example: 'He decided to abstain from eating sweets during the month.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fixate',
    definition: 'To become obsessively concerned with or focused on something',
    example: 'Children sometimes fixate on certain toys or characters.',
    partOfSpeech: 'verb'
  },
  {
    word: 'intrepid',
    definition: 'Fearless and adventurous; not afraid of danger or difficulty',
    example: 'The intrepid explorer ventured into unknown territories.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'loathe',
    definition: 'To feel intense dislike or disgust for',
    example: 'He loathes having to wake up early in the morning.',
    partOfSpeech: 'verb'
  },
  {
    word: 'amiable',
    definition: 'Having or displaying a friendly and pleasant manner',
    example: 'Her amiable personality made her popular with everyone.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obsessive',
    definition: 'Thinking about something or someone constantly in a way that is not normal',
    example: 'His obsessive attention to detail made him an excellent editor.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'preoccupied',
    definition: 'So concerned with something that you do not notice other things',
    example: 'She was too preoccupied with her work to notice the time passing.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'engrossed',
    definition: 'Having all your attention or interest absorbed by someone or something',
    example: 'The children were completely engrossed in the story.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dauntless',
    definition: 'Showing fearlessness and determination',
    example: 'The dauntless firefighter rushed into the burning building.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'resolutely',
    definition: 'In a way that shows firm determination',
    example: 'She resolutely refused to change her decision.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'sagacity',
    definition: 'The quality of being wise or having good judgment',
    example: 'The elderly woman was known for her sagacity in solving complex problems.',
    partOfSpeech: 'noun'
  },
  {
    word: 'proscribe',
    definition: 'To forbid or condemn, especially by official order',
    example: 'The government proscribed the use of certain chemicals in food products.',
    partOfSpeech: 'verb'
  },
  {
    word: 'burnished',
    definition: 'Polished by rubbing, especially with a cloth; made smooth and shiny',
    example: 'The burnished wood gleamed in the sunlight.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'alacrity',
    definition: 'Brisk and cheerful readiness or eagerness',
    example: 'She accepted the challenge with alacrity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'reluctant',
    definition: 'Unwilling and hesitant; disinclined',
    example: 'He was reluctant to share his personal information with strangers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fractious',
    definition: 'Easily irritated; bad-tempered or irritable',
    example: 'The children became fractious when they were tired.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inquisitive',
    definition: 'Having or showing an interest in learning things; curious',
    example: 'The inquisitive child asked endless questions about how things worked.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'credulity',
    definition: 'A tendency to be too ready to believe that something is real or true',
    example: 'The scammer took advantage of the elderly man\'s credulity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'effulgent',
    definition: 'Shining brightly; radiant',
    example: 'The effulgent rays of the morning sun streamed through the window.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'effrontery',
    definition: 'Insolent or impertinent behavior; shameless boldness',
    example: 'He had the effrontery to suggest that I was lying.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wretched',
    definition: 'Very unhappy, unfortunate, or miserable; or of poor quality or condition',
    example: 'The refugees lived in wretched conditions in the camp.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vague',
    definition: 'Not clearly expressed, understood, or thought out',
    example: 'She gave only a vague description of the man she saw.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ambiguous',
    definition: 'Open to more than one interpretation; not having one obvious meaning',
    example: 'His ambiguous response left us wondering what he really meant.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'rogue',
    definition: 'A dishonest or unprincipled person; or something operating outside normal or desirable controls',
    example: 'The rogue trader lost millions of dollars for the bank.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'vogue',
    definition: 'The prevailing fashion or style at a particular time',
    example: 'Bell-bottom jeans were in vogue during the 1970s.',
    partOfSpeech: 'noun'
  },
  {
    word: 'intricate',
    definition: 'Very complicated or detailed',
    example: 'The watch had an intricate mechanism of tiny gears and springs.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'complexly',
    definition: 'In a way that consists of many different and connected parts',
    example: 'The political situation was complexly intertwined with economic factors.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'interrelating',
    definition: 'Causing two or more things to be connected in a way that they affect each other',
    example: 'The professor explained the interrelating factors that led to the historical event.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'disinclined',
    definition: 'Unwilling or reluctant to do something',
    example: 'After a long day at work, he was disinclined to go out for dinner.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'averse',
    definition: 'Having a strong dislike of or opposition to something',
    example: 'She is not averse to taking risks when necessary.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'repugnance',
    definition: 'Strong dislike, distaste, or hostility',
    example: 'He felt repugnance at the thought of eating raw fish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'antipathy',
    definition: 'A deep-seated feeling of dislike or aversion',
    example: 'There was a mutual antipathy between the two colleagues.',
    partOfSpeech: 'noun'
  },
  {
    word: 'strenuous',
    definition: 'Requiring or using great exertion or effort',
    example: 'The hike up the mountain was strenuous but rewarding.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vigorous',
    definition: 'Strong, healthy, and full of energy',
    example: 'The plants showed vigorous growth after the rain.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'exasperation',
    definition: 'A feeling of intense irritation or annoyance',
    example: 'She sighed in exasperation when the computer crashed again.',
    partOfSpeech: 'noun'
  },
  {
    word: 'distress',
    definition: 'Extreme anxiety, sorrow, or pain',
    example: 'The news of the accident caused great distress to the family.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ecstatic',
    definition: 'Feeling or expressing overwhelming happiness or joyful excitement',
    example: 'The fans were ecstatic when their team won the championship.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'incoherent',
    definition: 'Expressed in an incomprehensible or confusing way; unclear',
    example: 'His explanation was so incoherent that nobody understood it.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'emitted',
    definition: 'Produced and discharged something, especially gas, radiation, or sound',
    example: 'The factory emitted large amounts of smoke into the air.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'tolerance',
    definition: 'The ability or willingness to accept something, especially opinions or behavior, that you may not agree with',
    example: 'The community prides itself on its tolerance of different cultures.',
    partOfSpeech: 'noun'
  },
  {
    word: 'adolescent',
    definition: 'A young person in the process of developing from a child into an adult',
    example: 'Adolescents often experience mood swings due to hormonal changes.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'defendant',
    definition: 'A person accused of a crime in a court of law',
    example: 'The defendant pleaded not guilty to all charges.',
    partOfSpeech: 'noun'
  },
  {
    word: 'benign',
    definition: 'Gentle and kind; not harmful or malicious',
    example: 'The tumor was found to be benign, not cancerous.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ample',
    definition: 'Enough or more than enough; plentiful',
    example: 'There was ample food for everyone at the party.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'copious',
    definition: 'Abundant in supply or quantity',
    example: 'She took copious notes during the lecture.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'abundant',
    definition: 'Existing or available in large quantities; plentiful',
    example: 'The region is known for its abundant natural resources.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'anguish',
    definition: 'Severe mental or physical pain or suffering',
    example: 'The mother felt anguish when her child went missing.',
    partOfSpeech: 'noun'
  },
  {
    word: 'radiant',
    definition: 'Sending out light; shining or glowing brightly',
    example: 'The bride looked radiant in her wedding dress.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'radiance',
    definition: 'Light or heat as emitted or reflected by something',
    example: 'The radiance of the sunset filled the sky with golden colors.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tendency',
    definition: 'An inclination toward a particular characteristic or type of behavior',
    example: 'He has a tendency to interrupt people when they\'re speaking.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tenacity',
    definition: 'The quality of being very determined; persistence',
    example: 'Her tenacity helped her overcome many obstacles in life.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inclination',
    definition: 'A person\'s natural tendency or urge to act or feel in a particular way',
    example: 'She had no inclination to study medicine despite her parents\' wishes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'exertion',
    definition: 'Physical or mental effort',
    example: 'The climb required considerable physical exertion.',
    partOfSpeech: 'noun'
  },
  {
    word: 'laborious',
    definition: 'Requiring considerable time and effort',
    example: 'Transcribing the old manuscripts was a laborious task.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'contrived',
    definition: 'Deliberately created rather than arising naturally or spontaneously',
    example: 'The plot of the movie seemed contrived and unconvincing.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'expend',
    definition: 'To use up a resource such as money, energy or time',
    example: 'Don\'t expend all your energy at the beginning of the race.',
    partOfSpeech: 'verb'
  },
  {
    word: 'foresight',
    definition: 'The ability to predict what will happen or be needed in the future',
    example: 'He had the foresight to invest in technology companies before they became popular.',
    partOfSpeech: 'noun'
  },
  {
    word: 'hindsight',
    definition: 'Understanding of a situation or event only after it has happened',
    example: 'In hindsight, we should have taken a different approach.',
    partOfSpeech: 'noun'
  },
  {
    word: 'provision',
    definition: 'The action of providing or supplying something for use',
    example: 'The provision of clean water is essential for public health.',
    partOfSpeech: 'noun'
  },
  {
    word: 'purveying',
    definition: 'Providing or supplying something, especially food or provisions',
    example: 'The company specializes in purveying fine wines to restaurants.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'amenities',
    definition: 'Desirable or useful features of a place that make it pleasant or comfortable',
    example: 'The hotel offers many amenities, including a swimming pool and fitness center.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'conventional',
    definition: 'Based on or in accordance with what is generally done or believed',
    example: 'She rejected conventional medicine in favor of alternative treatments.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'prudence',
    definition: 'Care and good sense that someone shows when making decisions',
    example: 'Financial prudence is important when planning for retirement.',
    partOfSpeech: 'noun'
  },
  {
    word: 'prescience',
    definition: 'Knowledge of things before they happen; foresight',
    example: 'His prescience about market trends made him a successful investor.',
    partOfSpeech: 'noun'
  },
  {
    word: 'implant',
    definition: 'To insert or fix something in a specified place',
    example: 'The surgeon will implant an artificial hip joint.',
    partOfSpeech: 'verb'
  },
  {
    word: 'recondite',
    definition: 'Little known or difficult to understand; abstruse',
    example: 'His lectures on philosophy were filled with recondite terminology.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'liberal',
    definition: 'Willing to respect or accept behavior or opinions different from one\'s own; open to new ideas',
    example: 'Her parents had liberal views on education.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'benevolent',
    definition: 'Well-meaning and kindly',
    example: 'The benevolent donor gave money to build a new children\'s hospital.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'condolence',
    definition: 'An expression of sympathy with someone who is suffering sorrow, misfortune, or grief',
    example: 'They sent a card of condolence when his mother died.',
    partOfSpeech: 'noun'
  },
  {
    word: 'indifferent',
    definition: 'Having no particular interest or concern; neither good nor bad',
    example: 'She was indifferent to the criticism and continued with her plans.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pledge',
    definition: 'A solemn promise or undertaking; or something given as security for a loan',
    example: 'The politician made a pledge to reduce taxes if elected.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'matted',
    definition: 'Tangled into a thick mass',
    example: 'The dog\'s fur was matted with mud after the walk.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pristine',
    definition: 'In its original condition; unspoiled',
    example: 'The island\'s beaches remained in pristine condition.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'plausible',
    definition: 'Seeming reasonable or probable',
    example: 'His explanation was plausible but later turned out to be false.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'marvel',
    definition: 'To be filled with wonder or astonishment; or something that causes such feelings',
    example: 'Visitors marvel at the beauty of the ancient temple.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'onslaught',
    definition: 'A fierce or destructive attack',
    example: 'The castle walls withstood the onslaught of the enemy army.',
    partOfSpeech: 'noun'
  },
  {
    word: 'meek',
    definition: 'Quiet, gentle, and easily imposed on; submissive',
    example: 'Despite his meek appearance, he had a strong personality.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'docile',
    definition: 'Ready to accept control or instruction; submissive',
    example: 'The horse was docile and easy to train.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'peculiar',
    definition: 'Strange or unusual; different from what is normal or expected',
    example: 'There was a peculiar smell coming from the kitchen.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'oversight',
    definition: 'An unintentional failure to notice or do something; or supervision and watchful care',
    example: 'Not inviting him to the meeting was an oversight, not a deliberate exclusion.',
    partOfSpeech: 'noun'
  },
  {
    word: 'goodwill',
    definition: 'Friendly, helpful, or cooperative feelings or attitude',
    example: 'The company has built up a lot of goodwill among its customers.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conspiracy',
    definition: 'A secret plan by a group to do something unlawful or harmful',
    example: 'The police uncovered a conspiracy to assassinate the president.',
    partOfSpeech: 'noun'
  },
  {
    word: 'hostile',
    definition: 'Showing or feeling opposition or dislike; unfriendly',
    example: 'The crowd became hostile when the team began to lose.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hectic',
    definition: 'Full of incessant or frantic activity',
    example: 'It was a hectic day at the office with endless meetings and phone calls.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'serene',
    definition: 'Calm, peaceful, and untroubled; tranquil',
    example: 'The lake looked serene in the early morning light.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'essay',
    definition: 'A short piece of writing on a particular subject',
    example: 'She wrote an essay about climate change for her English class.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dissertation',
    definition: 'A long essay on a particular subject, especially one written for a university degree',
    example: 'His dissertation on medieval poetry earned him a doctoral degree.',
    partOfSpeech: 'noun'
  },
  {
    word: 'moribund',
    definition: 'At the point of death; in terminal decline; lacking vitality or vigor',
    example: 'The moribund company finally closed after years of financial struggles.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'diffident',
    definition: 'Modest or shy because of a lack of self-confidence',
    example: 'The diffident student rarely spoke up in class despite knowing the answers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pernicious',
    definition: 'Having a harmful effect, especially in a gradual or subtle way',
    example: 'The pernicious effects of the pollution were not immediately apparent.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'acrimony',
    definition: 'Bitterness and ill feeling',
    example: 'The divorce was filled with acrimony and disagreements over property.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dispute',
    definition: 'A disagreement, argument, or debate; or to question the truth or validity of something',
    example: 'The neighbors got into a dispute over the property boundary.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'bitterness',
    definition: 'Anger and disappointment at being treated unfairly; or a sharp, unpleasant taste',
    example: 'There was still bitterness between them years after the argument.',
    partOfSpeech: 'noun'
  },
  {
    word: 'main',
    definition: 'Chief in size or importance; principal',
    example: 'The main reason for her success was her determination.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'surly',
    definition: 'Bad-tempered and unfriendly',
    example: 'The surly waiter barely spoke when taking our order.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'courteous',
    definition: 'Polite, respectful, or considerate in manner',
    example: 'The hotel staff was courteous and helpful throughout our stay.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'nurture',
    definition: 'To care for and encourage the growth or development of someone or something',
    example: 'Parents should nurture their children\'s talents and interests.',
    partOfSpeech: 'verb'
  },
  {
    word: 'abrupt',
    definition: 'Sudden and unexpected; or brief to the point of rudeness',
    example: 'The conversation came to an abrupt end when he walked out.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hinder',
    definition: 'To make it difficult for someone to do something or for something to happen',
    example: 'Bad weather hindered the rescue operation.',
    partOfSpeech: 'verb'
  },
  {
    word: 'lucrative',
    definition: 'Producing a large amount of money; profitable',
    example: 'She left her job to pursue a more lucrative career in finance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intact',
    definition: 'Not damaged or impaired in any way; complete',
    example: 'Miraculously, the vase remained intact when it fell.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obscure',
    definition: 'Not well known or famous; or difficult to understand',
    example: 'He collects obscure jazz recordings from the 1920s.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'bliss',
    definition: 'Perfect happiness; great joy',
    example: 'Their honeymoon in Hawaii was pure bliss.',
    partOfSpeech: 'noun'
  },
  {
    word: 'uppity',
    definition: 'Self-important; arrogant',
    example: 'Some people thought she was uppity after she got her promotion.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'arrogant',
    definition: 'Having or revealing an exaggerated sense of one\'s own importance or abilities',
    example: 'His arrogant attitude made it difficult for others to work with him.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'condescending',
    definition: 'Acting in a way that shows you believe you are more important or more intelligent than others',
    example: 'She disliked his condescending tone when he explained simple concepts to her.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'patronising',
    definition: 'Treating someone in a way that seems kind but betrays a feeling of superiority',
    example: 'His patronising comments about her cooking made her angry.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'superiority',
    definition: 'The quality or state of being better or greater than others',
    example: 'The team\'s superiority was evident throughout the tournament.',
    partOfSpeech: 'noun'
  },
  {
    word: 'enervating',
    definition: 'Causing one to feel drained of energy or vitality',
    example: 'The combination of heat and humidity made for an enervating afternoon.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ruthless',
    definition: 'Having or showing no pity or compassion for others',
    example: 'The ruthless businessman destroyed his competitors without remorse.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'mercy',
    definition: 'Compassion or forgiveness shown toward someone whom it is within one\'s power to punish or harm',
    example: 'He begged for mercy after being caught stealing.',
    partOfSpeech: 'noun'
  },
  {
    word: 'acerbic',
    definition: 'Sharp and forthright in expression; harsh or severe',
    example: 'The critic was known for his acerbic reviews of new restaurants.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sarcastic',
    definition: 'Marked by or given to using irony in order to mock or convey contempt',
    example: 'His sarcastic comment about her cooking upset her.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fatuous',
    definition: 'Silly and pointless; foolish',
    example: 'He made a fatuous remark that everyone ignored.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'prognosticate',
    definition: 'To forecast or predict (something future) from present indications or signs',
    example: 'The financial analyst attempted to prognosticate the market trends for the next year.',
    partOfSpeech: 'verb'
  },
  {
    word: 'rodent',
    definition: 'A gnawing mammal of an order that includes rats, mice, squirrels, hamsters, porcupines, and their relatives',
    example: 'Mice and rats are common rodents found in urban areas.',
    partOfSpeech: 'noun'
  },
  {
    word: 'mediocre',
    definition: 'Of only moderate or low quality; not very good',
    example: 'Despite all the hype, the movie was disappointingly mediocre.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vacant',
    definition: 'Not occupied; empty; or showing no intelligence or interest',
    example: 'We checked into the hotel and found our room was clean but vacant of furniture.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vacancy',
    definition: 'An unoccupied position or job; or an empty space or room',
    example: 'The hotel had no vacancies for the weekend.',
    partOfSpeech: 'noun'
  },
  {
    word: 'consultant',
    definition: 'A person who provides expert advice professionally',
    example: 'The company hired a consultant to help improve their marketing strategy.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dimension',
    definition: 'A measurable extent of a particular kind, such as length, breadth, depth, or height',
    example: 'The room\'s dimensions were too small for the new furniture.',
    partOfSpeech: 'noun'
  },
  {
    word: 'justify',
    definition: 'To show or prove to be right or reasonable',
    example: 'How can you justify spending so much money on shoes?',
    partOfSpeech: 'verb'
  },
  {
    word: 'distinguish',
    definition: 'To recognize or treat as different; or to be an identifying characteristic',
    example: 'It\'s hard to distinguish between the twins because they look so similar.',
    partOfSpeech: 'verb'
  },
  {
    word: 'malice',
    definition: 'The intention or desire to do evil; ill will',
    example: 'The comment was made without malice; she didn\'t mean to hurt anyone.',
    partOfSpeech: 'noun'
  },
  {
    word: 'petty',
    definition: 'Of little importance; trivial; or marked by smallness of character',
    example: 'They argued over petty issues like who would take out the trash.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pretention',
    definition: 'A claim or assertion of a claim to something',
    example: 'His pretention to be an expert was quickly exposed when he couldn\'t answer basic questions.',
    partOfSpeech: 'noun'
  },
  {
    word: 'discreetly',
    definition: 'In a careful and prudent manner, especially to keep something secret',
    example: 'She discreetly slipped the note into his pocket without anyone noticing.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'immovably',
    definition: 'In a way that cannot be moved or shifted',
    example: 'The large boulder stood immovably at the entrance to the cave.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'prosperous',
    definition: 'Successful in material terms; flourishing financially',
    example: 'The town became prosperous after the new factory opened.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fictitious',
    definition: 'Not real or true; imaginary or fabricated',
    example: 'The novel is set in a fictitious town based on the author\'s hometown.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'controversial',
    definition: 'Giving rise or likely to give rise to controversy or public disagreement',
    example: 'The politician\'s controversial statements led to heated debates.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'disputable',
    definition: 'Open to question; debatable',
    example: 'Whether this is the best solution is highly disputable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'province',
    definition: 'An area of government or professional activity; or a principal administrative division of a country or empire',
    example: 'Quebec is the largest province in Canada.',
    partOfSpeech: 'noun'
  },
  {
    word: 'palatial',
    definition: 'Resembling a palace in being spacious and splendid',
    example: 'They lived in a palatial mansion with twenty rooms.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'potential',
    definition: 'Having or showing the capacity to become or develop into something in the future',
    example: 'The young musician has great potential to become a star.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'substantial',
    definition: 'Of considerable importance, size, or worth',
    example: 'The charity received a substantial donation that will fund their work for years.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'essential',
    definition: 'Absolutely necessary; extremely important',
    example: 'Water is essential for human survival.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'audacity',
    definition: 'Boldness or daring, especially with confident disregard for boundaries or rules',
    example: 'She had the audacity to question the CEO\'s decision in front of everyone.',
    partOfSpeech: 'noun'
  },
  {
    word: 'superstition',
    definition: 'A widely held but irrational belief in supernatural influences',
    example: 'It\'s a common superstition that breaking a mirror brings seven years of bad luck.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conceal',
    definition: 'To hide or keep from revealing or showing',
    example: 'She tried to conceal her disappointment when she didn\'t get the job.',
    partOfSpeech: 'verb'
  },
  {
    word: 'devious',
    definition: 'Showing a skillful use of dishonest tactics to achieve goals',
    example: 'His devious plan to cheat the company was discovered before he could carry it out.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'equestrian',
    definition: 'Relating to horse riding; or a horse rider',
    example: 'She competed in several equestrian events at the Olympics.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'inexplicably',
    definition: 'In a way that cannot be explained or accounted for',
    example: 'He inexplicably failed to show up for the important meeting.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'redundant',
    definition: 'Not or no longer needed or useful; superfluous',
    example: 'With the new system, the old filing method became redundant.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ravenous',
    definition: 'Extremely hungry; voracious',
    example: 'After the long hike, the children were ravenous.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'barren',
    definition: 'Too poor to produce much or any vegetation; or showing no results or achievements',
    example: 'The expedition across the barren desert was extremely challenging.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'iridescent',
    definition: 'Showing luminous colors that seem to change when seen from different angles',
    example: 'The soap bubble had an iridescent surface that reflected rainbow colors.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'luminous',
    definition: 'Giving off light; bright or shining',
    example: 'The watch has luminous hands that glow in the dark.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'siege',
    definition: 'A military operation in which enemy forces surround a town or building, cutting off essential supplies',
    example: 'The castle withstood a siege that lasted for three months.',
    partOfSpeech: 'noun'
  },
  {
    word: 'zealous',
    definition: 'Having or showing zeal; enthusiastic and diligent',
    example: 'The zealous student spent every spare moment studying for the exam.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perceive',
    definition: 'To become aware or conscious of something; to come to realize or understand',
    example: 'I perceive a change in his attitude since the incident.',
    partOfSpeech: 'verb'
  },
  {
    word: 'pertaining',
    definition: 'Relating to or concerning something',
    example: 'The lawyer asked questions pertaining to the accident.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'federal',
    definition: 'Having or relating to a system of government in which power is divided between a central authority and constituent political units',
    example: 'The federal government passed a new law affecting all states.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'juvenile',
    definition: 'A young person; or relating to or characteristic of young people',
    example: 'The juvenile court system handles cases involving underage offenders.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'excess',
    definition: 'An amount that is more than the normal, necessary, or desirable',
    example: 'The excess food from the party was donated to a local shelter.',
    partOfSpeech: 'noun'
  },
  {
    word: 'excessively',
    definition: 'To a degree that is more than necessary, normal, or desirable',
    example: 'The report was excessively long and contained unnecessary details.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'notorious',
    definition: 'Famous or well-known, typically for some bad quality or deed',
    example: 'The area is notorious for its high crime rate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'conduct',
    definition: 'The manner in which a person behaves; or to organize and carry out',
    example: 'His professional conduct during the crisis was admirable.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'prying eyes',
    definition: 'People who are trying to see or find out things that do not concern them',
    example: 'She hid the present from prying eyes until the birthday party.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'presence',
    definition: 'The state or fact of existing, occurring, or being present',
    example: 'The presence of security cameras deterred thieves.',
    partOfSpeech: 'noun'
  },
  {
    word: 'deduce',
    definition: 'To arrive at a fact or a conclusion by reasoning from known facts',
    example: 'From the evidence, the detective was able to deduce who committed the crime.',
    partOfSpeech: 'verb'
  },
  {
    word: 'imply',
    definition: 'To indicate or suggest without being explicitly stated',
    example: 'His silence seemed to imply agreement with the proposal.',
    partOfSpeech: 'verb'
  },
  {
    word: 'conclude',
    definition: 'To bring or come to an end; or to arrive at a judgment or opinion by reasoning',
    example: 'Based on the data, scientists concluded that climate change is accelerating.',
    partOfSpeech: 'verb'
  },
  {
    word: 'anecdote',
    definition: 'A short and amusing or interesting story about a real incident or person',
    example: 'The grandfather entertained the children with anecdotes from his childhood.',
    partOfSpeech: 'noun'
  },
  {
    word: 'emotive',
    definition: 'Arousing or able to arouse intense feeling',
    example: 'The emotive issue of gun control divides many communities.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'idiom',
    definition: 'A group of words established by usage as having a meaning not deducible from the meanings of the individual words',
    example: '"Under the weather" is an idiom that means feeling ill.',
    partOfSpeech: 'noun'
  },
  {
    word: 'imponderable',
    definition: 'A factor that is difficult or impossible to estimate or assess',
    example: 'The weather is an imponderable that could affect the outdoor event.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ponder',
    definition: 'To think about something carefully, especially before making a decision',
    example: 'She sat by the window to ponder her next career move.',
    partOfSpeech: 'verb'
  },
  {
    word: 'determiner',
    definition: 'A word that determines the kind of reference a noun has, such as "a," "the," "this," "my"',
    example: 'In the phrase "my book," the word "my" is a determiner.',
    partOfSpeech: 'noun'
  },
  {
    word: 'endure',
    definition: 'To suffer something difficult, unpleasant, or painful; or to remain in existence',
    example: 'The old building has endured for over 200 years despite many storms.',
    partOfSpeech: 'verb'
  },
  {
    word: 'intriguing',
    definition: 'Arousing one\'s curiosity or interest; fascinating',
    example: 'The detective found an intriguing clue at the crime scene.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'leverage',
    definition: 'The use of something to maximum advantage; or the exertion of force by means of a lever',
    example: 'The company used its market position to leverage better deals with suppliers.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'incessantly',
    definition: 'Without interruption; constantly',
    example: 'The baby cried incessantly throughout the night.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'repellent',
    definition: 'Causing disgust or distaste; or a substance that repels something, especially an insect or other pest',
    example: 'The hikers applied mosquito repellent before entering the woods.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'excerpt',
    definition: 'A short extract from a film, broadcast, or piece of music or writing',
    example: 'The magazine published an excerpt from her forthcoming novel.',
    partOfSpeech: 'noun'
  },
  {
    word: 'proceeds',
    definition: 'Money obtained from an event or activity',
    example: 'All proceeds from the concert will go to charity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'novel',
    definition: 'A fictitious prose narrative of book length; or new and original, not like anything seen before',
    example: 'Her first novel won a prestigious literary award.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'noble',
    definition: 'Having or showing fine personal qualities or high moral principles',
    example: 'It was noble of him to take the blame to protect his friend.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'famished',
    definition: 'Extremely hungry',
    example: 'After the long hike, they were famished and quickly ate their lunch.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'baring',
    definition: 'Uncovering and exposing to view',
    example: 'Baring her teeth in a snarl, the dog warned the intruder to back away.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'bare',
    definition: 'Without covering or clothing; or minimal and basic',
    example: 'The trees were bare in winter after losing all their leaves.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'moral',
    definition: 'Concerned with the principles of right and wrong behavior',
    example: 'The story teaches a moral lesson about honesty.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'covet',
    definition: 'To yearn to possess or have something that belongs to another',
    example: 'She coveted her neighbor\'s new car.',
    partOfSpeech: 'verb'
  },
  {
    word: 'beauty spot',
    definition: 'A particularly beautiful or scenic place; or a small dark artificial mark worn on the face',
    example: 'The lake is a well-known beauty spot popular with tourists.',
    partOfSpeech: 'noun'
  },
  {
    word: 'astute',
    definition: 'Having or showing an ability to accurately assess situations',
    example: 'The astute investor recognized the potential in the startup company.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'psalm',
    definition: 'A sacred song or poem used in worship, especially one from the Book of Psalms in the Bible',
    example: 'The choir sang Psalm 23 during the service.',
    partOfSpeech: 'noun'
  },
  {
    word: 'puny',
    definition: 'Small and weak',
    example: 'His puny efforts to lift the heavy box made everyone laugh.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perceptive',
    definition: 'Having or showing sensitive insight',
    example: 'Her perceptive comments showed that she understood the complex situation.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'stoop',
    definition: 'To bend one\'s head or body forward and downward',
    example: 'He had to stoop to enter the low doorway.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mutate',
    definition: 'To change or cause to change in form or nature',
    example: 'The virus can mutate rapidly, making it difficult to develop effective vaccines.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prolong',
    definition: 'To extend the duration of something',
    example: 'Medical treatment can prolong the lives of many cancer patients.',
    partOfSpeech: 'verb'
  },
  {
    word: 'couch potato',
    definition: 'A person who spends a lot of time sitting or lying down, usually watching television',
    example: 'He became a couch potato during his summer vacation, watching TV all day.',
    partOfSpeech: 'noun'
  },
  {
    word: 'calcium',
    definition: 'A chemical element essential for living organisms, especially for bone formation',
    example: 'Milk and cheese are good sources of calcium.',
    partOfSpeech: 'noun'
  },
  {
    word: 'framework',
    definition: 'A basic structure underlying a system, concept, or text',
    example: 'The constitution provides the framework for our legal system.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pioneer',
    definition: 'A person who is among the first to explore or settle a new area; or develop or be the first to use a new method',
    example: 'Marie Curie was a pioneer in the field of radioactivity.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'lapse',
    definition: 'A brief or temporary failure of concentration, memory, or judgment',
    example: 'He had a momentary lapse of attention and drove through a red light.',
    partOfSpeech: 'noun'
  },
  {
    word: 'vacuum',
    definition: 'A space entirely devoid of matter; or a vacuum cleaner',
    example: 'In a perfect vacuum, sound cannot travel.',
    partOfSpeech: 'noun'
  },
  {
    word: 'confess',
    definition: 'To admit or state that one has committed a crime or done something wrong',
    example: 'The suspect finally confessed to the robbery.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hypochondriac',
    definition: 'A person who is abnormally anxious about their health',
    example: 'As a hypochondriac, he visited doctors frequently convinced he had serious illnesses.',
    partOfSpeech: 'noun'
  },
  {
    word: 'psychology',
    definition: 'The scientific study of the mind and behavior',
    example: 'She studied psychology at university before becoming a counselor.',
    partOfSpeech: 'noun'
  },
  {
    word: 'insubstantial',
    definition: 'Lacking substance or material existence; flimsy or slight',
    example: 'His arguments were insubstantial and easily disproven.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dusk',
    definition: 'The darker stage of twilight in the evening',
    example: 'The park closes at dusk for safety reasons.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dawn',
    definition: 'The first appearance of light in the sky before sunrise',
    example: 'They woke up at dawn to start their journey before the heat of the day.',
    partOfSpeech: 'noun'
  },
  {
    word: 'secluded',
    definition: 'Not seen or visited by many people; private and quiet',
    example: 'They spent their honeymoon in a secluded cabin in the mountains.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sow',
    definition: 'Plant seed by scattering it on or in the earth; or an adult female pig',
    example: 'Farmers sow their fields in spring to prepare for the summer growing season.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'hog',
    definition: 'A domesticated pig, especially one raised for slaughter; or to take or use more than one\'s share',
    example: 'Don\'t hog all the blankets on a cold night.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'stocky',
    definition: 'Short and heavily built',
    example: 'The stocky wrestler had a powerful stance in the ring.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'arid',
    definition: 'Very dry and without enough rain for plants to grow',
    example: 'Cacti are adapted to survive in arid desert conditions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'humble',
    definition: 'Having or showing a modest or low estimate of one\'s own importance',
    example: 'Despite his fame, the actor remained humble and grateful to his fans.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'candid',
    definition: 'Truthful and straightforward; frank',
    example: 'She gave a candid account of her experiences during the war.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'extraordinary',
    definition: 'Very unusual, special, unexpected, or strange',
    example: 'The scientist made an extraordinary discovery that changed our understanding of physics.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'advocate',
    definition: 'To publicly recommend or support; or a person who supports a particular cause',
    example: 'She advocates for children\'s rights in developing countries.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'to wolf down',
    definition: 'To eat something very quickly and in large amounts',
    example: 'The hungry teenagers wolfed down the pizza in minutes.',
    partOfSpeech: 'phrase'
  },
  {
    word: 'acquittal',
    definition: 'A judgment that a person is not guilty of the crime with which they have been charged',
    example: 'The jury\'s acquittal of the defendant surprised many who had followed the trial.',
    partOfSpeech: 'noun'
  },
  {
    word: 'comprising',
    definition: 'Consisting of; made up of',
    example: 'The committee comprising five experts will review the proposal.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'lone',
    definition: 'Single; solitary; being the only one',
    example: 'A lone figure stood at the edge of the cliff watching the sunset.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'laceration',
    definition: 'A deep cut or tear in skin or flesh',
    example: 'The doctor treated the laceration on his arm with several stitches.',
    partOfSpeech: 'noun'
  },
  {
    word: 'succulent',
    definition: 'Having thick fleshy leaves that store water; or juicy and tender (of food)',
    example: 'Cacti are succulent plants adapted to survive in desert conditions.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'meandering',
    definition: 'Following a winding course; or moving aimlessly from one subject to another',
    example: 'The river\'s meandering path created a beautiful landscape.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'conduct',
    definition: 'The manner in which a person behaves; or to direct the performance of',
    example: 'His professional conduct was praised by his colleagues.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'frailty',
    definition: 'The condition of being weak and delicate; or a particular weakness',
    example: 'Despite his physical frailty, his mind remained sharp.',
    partOfSpeech: 'noun'
  },
  {
    word: 'adept',
    definition: 'Very skilled or proficient at something',
    example: 'She was adept at solving complex mathematical problems.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'clammy',
    definition: 'Unpleasantly damp and sticky',
    example: 'Fear made his hands clammy with sweat.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'brisk',
    definition: 'Quick, active, and energetic; or cold but invigorating',
    example: 'They took a brisk walk through the park on the cool autumn morning.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'grit',
    definition: 'Small particles of stone or sand; or courage and resolve',
    example: 'It takes grit to continue trying after repeated failures.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wear',
    definition: 'To have clothing or accessories on one\'s body; or to damage through continued use',
    example: 'She decided to wear her blue dress to the party.',
    partOfSpeech: 'verb'
  },
  {
    word: 'sear',
    definition: 'To burn or scorch with sudden intense heat',
    example: 'The chef will sear the steak before finishing it in the oven.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hydrocarbon',
    definition: 'A compound of hydrogen and carbon, such as any of those that are the chief components of petroleum and natural gas',
    example: 'Fossil fuels like oil and natural gas consist primarily of hydrocarbons.',
    partOfSpeech: 'noun'
  },
  {
    word: 'kryptonite',
    definition: 'A fictional substance that weakens Superman; or metaphorically, a person\'s weakness',
    example: 'Chocolate is my kryptonite—I simply cannot resist it.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dastardly',
    definition: 'Wicked and cruel',
    example: 'The villain\'s dastardly plan was foiled by the hero.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'silt',
    definition: 'Fine sand, clay, or other material carried by running water and deposited as sediment',
    example: 'The river delta was formed by silt deposits over thousands of years.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tantalize',
    definition: 'To tease or torment by presenting something desirable but continuously out of reach',
    example: 'The aroma from the kitchen tantalized the hungry guests.',
    partOfSpeech: 'verb'
  },
  {
    word: 'shun',
    definition: 'To persistently avoid, ignore, or reject through antipathy or caution',
    example: 'She chose to shun social media to focus on her studies.',
    partOfSpeech: 'verb'
  },
  {
    word: 'primal',
    definition: 'Relating to an early stage in evolutionary development; primary or fundamental',
    example: 'The discovery awakened a primal fear in the explorers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'lanky',
    definition: 'Ungracefully tall and thin',
    example: 'The lanky teenager towered over his classmates.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'yank',
    definition: 'To pull with a quick, strong movement',
    example: 'She yanked the door open when she heard the doorbell.',
    partOfSpeech: 'verb'
  },
  {
    word: 'crepe',
    definition: 'A light, thin fabric with a wrinkled surface; or a thin pancake',
    example: 'They ordered crepes with strawberries and cream for breakfast.',
    partOfSpeech: 'noun'
  },
  {
    word: 'cache',
    definition: 'A collection of items stored in a hidden or inaccessible place',
    example: 'The archaeologists discovered a cache of ancient coins buried near the temple.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wither',
    definition: 'To become dry and shriveled; or to decay or decline',
    example: 'Without water, the plants will wither and die.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hither and thither',
    definition: 'Here and there; to various places',
    example: 'The children ran hither and thither on the playground.',
    partOfSpeech: 'phrase'
  },
  {
    word: 'forsake',
    definition: 'To abandon or leave entirely; to renounce',
    example: 'He would never forsake his principles, even under pressure.',
    partOfSpeech: 'verb'
  },
  {
    word: 'belittle',
    definition: 'To make someone or something seem unimportant',
    example: 'A good teacher never belittles students\' questions.',
    partOfSpeech: 'verb'
  },
  {
    word: 'solace',
    definition: 'Comfort or consolation in a time of distress or sadness',
    example: 'She found solace in music after losing her job.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grater',
    definition: 'A kitchen utensil with a rough surface used for grating food',
    example: 'She used a grater to prepare the cheese for the pasta dish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'orate',
    definition: 'To speak formally and at length; to deliver an oration',
    example: 'The politician orated for nearly an hour about economic reform.',
    partOfSpeech: 'verb'
  },
  {
    word: 'overt',
    definition: 'Done or shown openly; plainly or readily apparent, not secret or hidden',
    example: 'There was an overt attempt to influence the judge\'s decision.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'char',
    definition: 'To partially burn so as to blacken the surface',
    example: 'The chef will char the peppers to remove their skins.',
    partOfSpeech: 'verb'
  },
  {
    word: 'covert',
    definition: 'Not openly acknowledged or displayed; secret',
    example: 'The spy was involved in covert operations for many years.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vertebrae',
    definition: 'The series of small bones forming the backbone',
    example: 'The doctor examined the X-ray to check for damage to the vertebrae in her spine.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'foment',
    definition: 'To instigate or stir up (an undesirable situation)',
    example: 'The politician was accused of trying to foment discord among different community groups.',
    partOfSpeech: 'verb'
  },
  {
    word: 'adulterate',
    definition: 'To make something poorer in quality by adding another substance',
    example: 'Some companies illegally adulterate their food products with cheaper ingredients.',
    partOfSpeech: 'verb'
  },
  {
    word: 'queasiness',
    definition: 'A feeling of nausea or being sick to one\'s stomach',
    example: 'The rough boat ride caused queasiness among many of the passengers.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tolerate',
    definition: 'To allow the existence or occurrence of something without interference',
    example: 'She could not tolerate any form of dishonesty in her classroom.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tranquil',
    definition: 'Free from disturbance; calm and peaceful',
    example: 'The lake was tranquil, with not even a ripple disturbing its surface.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'coerce',
    definition: 'To persuade someone to do something by using force or threats',
    example: 'The witness claimed she was coerced into giving false testimony.',
    partOfSpeech: 'verb'
  },
  {
    word: 'coercion',
    definition: 'The practice of forcing someone to do something by using threats or violence',
    example: 'The confession was obtained through coercion and was therefore inadmissible in court.',
    partOfSpeech: 'noun'
  },
  {
    word: 'urban',
    definition: 'Relating to or characteristic of a town or city',
    example: 'Urban areas typically have higher population densities than rural ones.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'criticism',
    definition: 'The expression of disapproval based on perceived faults or mistakes',
    example: 'She offered constructive criticism to help improve the project.',
    partOfSpeech: 'noun'
  },
  {
    word: 'putrid',
    definition: 'Decaying or rotting and having a foul smell',
    example: 'The putrid odor from the garbage bin filled the alleyway.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inhospitable',
    definition: 'Not friendly or welcoming to visitors or guests; harsh and difficult to live in',
    example: 'The desert is an inhospitable environment for most plants.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inauthentic',
    definition: 'Not genuine or real; fake or false',
    example: 'The expert identified the painting as an inauthentic copy of the original.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inexpensive',
    definition: 'Not costing a lot of money; affordable',
    example: 'They found an inexpensive hotel for their vacation.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'proposal',
    definition: 'A plan or suggestion put forward for consideration',
    example: 'The committee will review the proposal for the new park next week.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dissent',
    definition: 'The expression of opinions that disagree with officially accepted ideas',
    example: 'The teacher encouraged students to voice their dissent during class discussions.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'consent',
    definition: 'Permission or agreement to do something',
    example: 'The parents gave their consent for the child to go on the field trip.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'jovial',
    definition: 'Cheerful and friendly',
    example: 'The jovial host made everyone feel welcome at the party.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sympathy',
    definition: 'Feelings of pity and sorrow for someone else\'s misfortune',
    example: 'They expressed their sympathy to the family after hearing about the accident.',
    partOfSpeech: 'noun'
  },
  {
    word: 'aversion',
    definition: 'A strong dislike or disinclination',
    example: 'She has an aversion to spicy food and avoids it completely.',
    partOfSpeech: 'noun'
  },
  {
    word: 'coracle',
    definition: 'A small, round boat made of wickerwork covered with a waterproof material, traditionally used in Wales',
    example: 'The fisherman used a coracle to navigate the shallow waters of the river.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conspicuous',
    definition: 'Easily seen or noticed; attracting attention',
    example: 'His bright orange hat made him conspicuous in the crowd.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'extravagance',
    definition: 'The quality of being showy, unnecessary or wasteful; lack of restraint in spending money',
    example: 'The golden taps in the bathroom were seen as an unnecessary extravagance.',
    partOfSpeech: 'noun'
  },
  {
    word: 'disgruntled',
    definition: 'Angry or dissatisfied',
    example: 'The disgruntled employees filed a complaint about working conditions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'manila',
    definition: 'A type of durable paper or envelope made from hemp, used for folders or heavy paper work',
    example: 'She filed the documents in a manila folder for safekeeping.',
    partOfSpeech: 'noun'
  },
  {
    word: 'brigand',
    definition: 'A member of a gang that ambushes and robs people; a bandit',
    example: 'In the story, the travelers were attacked by brigands on the mountain pass.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gawping',
    definition: 'Staring in a stupid or rude manner, often with the mouth open',
    example: 'The tourists were gawping at the unusual street performer.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'carnage',
    definition: 'The killing of a large number of people; slaughter',
    example: 'The historical account described the carnage of the ancient battle.',
    partOfSpeech: 'noun'
  },
  {
    word: 'forlorn',
    definition: 'Pitifully sad and abandoned or lonely',
    example: 'The forlorn puppy sat in the corner of its cage at the shelter.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'apprehend',
    definition: 'To arrest someone for a crime; or to understand or grasp an idea',
    example: 'The police were able to apprehend the suspect after a brief chase.',
    partOfSpeech: 'verb'
  },
  {
    word: 'quilts',
    definition: 'Thick bed coverings made of padding enclosed between layers of fabric and kept in place by lines of stitching',
    example: 'Grandmother made beautiful handmade quilts for each of her grandchildren.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'constant',
    definition: 'Occurring continuously over a period of time; unchanging',
    example: 'The constant noise from the construction site made it hard to concentrate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'diligent',
    definition: 'Having or showing care and conscientiousness in one\'s work or duties',
    example: 'The diligent student spent extra hours studying for the exam.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'impudent',
    definition: 'Not showing due respect; impertinent',
    example: 'The teacher was shocked by the student\'s impudent response to a simple question.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dishevel',
    definition: 'To make untidy or disarranged',
    example: 'The strong wind disheveled her neatly combed hair.',
    partOfSpeech: 'verb'
  },
  {
    word: 'spouse',
    definition: 'A husband or wife, considered in relation to their partner',
    example: 'The invitation was extended to employees and their spouses.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ally',
    definition: 'A person, group, or nation that is associated with another for some common cause or purpose',
    example: 'The two countries became allies during the war.',
    partOfSpeech: 'noun'
  },
  {
    word: 'corvid',
    definition: 'A bird of the crow family, including crows, ravens, rooks, jackdaws, jays, and magpies',
    example: 'Ravens are large corvids known for their intelligence and problem-solving abilities.',
    partOfSpeech: 'noun'
  },
  {
    word: 'virtue',
    definition: 'Behavior showing high moral standards; a good or useful quality',
    example: 'Patience is a virtue when teaching young children.',
    partOfSpeech: 'noun'
  },
  {
    word: 'obscure',
    definition: 'Not well known or famous; difficult to understand',
    example: 'She enjoys reading obscure poetry that few people have heard of.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obstinate',
    definition: 'Stubbornly refusing to change one\'s opinion or course of action',
    example: 'The obstinate child refused to eat his vegetables despite his parents\' persuasion.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'deviousness',
    definition: 'The quality of being skillful in using dishonest or underhand tactics',
    example: 'Her deviousness enabled her to manipulate the situation to her advantage.',
    partOfSpeech: 'noun'
  },
  {
    word: 'guile',
    definition: 'Sly or cunning intelligence; crafty deceit',
    example: 'The fox is often portrayed in fables as having great guile.',
    partOfSpeech: 'noun'
  },
  {
    word: 'exacerbate',
    definition: 'To make a problem, bad situation, or negative feeling worse',
    example: 'The harsh criticism only exacerbated his feelings of inadequacy.',
    partOfSpeech: 'verb'
  },
  {
    word: 'aggravate',
    definition: 'To make a problem, injury, or offense worse or more serious',
    example: 'Running will aggravate your knee injury if you don\'t rest it properly.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mitigate',
    definition: 'To make less severe, serious, or painful',
    example: 'Taking medication helped mitigate the symptoms of her cold.',
    partOfSpeech: 'verb'
  },
  {
    word: 'dear',
    definition: 'Regarded with deep affection; greatly loved; or expensive',
    example: 'My dear friend, it\'s been too long since we last spoke.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'flawless',
    definition: 'Without any imperfections or faults; perfect',
    example: 'The diamond was completely flawless and worth a fortune.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'effable',
    definition: 'Able to be described in words',
    example: 'Some experiences are so profound that they are hardly effable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'asunder',
    definition: 'Into pieces; apart',
    example: 'The explosion tore the building asunder.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'bemused',
    definition: 'Puzzled, confused, or bewildered',
    example: 'He had a bemused expression as he tried to follow the complex instructions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'amuse',
    definition: 'To cause someone to find something funny or entertaining',
    example: 'The clown\'s antics amused the children at the party.',
    partOfSpeech: 'verb'
  },
  {
    word: 'arduous',
    definition: 'Involving or requiring strenuous effort; difficult and tiring',
    example: 'The journey across the mountain was arduous but worth it for the view.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'antiquity',
    definition: 'The ancient past, especially the period before the Middle Ages; an object from ancient times',
    example: 'The museum contains artifacts from antiquity that are over 3,000 years old.',
    partOfSpeech: 'noun'
  },
  {
    word: 'milliner',
    definition: 'A person who makes or sells women\'s hats',
    example: 'The milliner created an elaborate hat for the customer to wear to the horse race.',
    partOfSpeech: 'noun'
  },
  {
    word: 'stubbly',
    definition: 'Covered with or consisting of short, stiff hairs or projections',
    example: 'His stubbly chin showed he hadn\'t shaved for a couple of days.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'decrepit',
    definition: 'Worn out or ruined because of age or neglect',
    example: 'The decrepit old building was scheduled for demolition.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'allure',
    definition: 'The quality of being powerfully and mysteriously attractive or fascinating',
    example: 'The allure of foreign travel tempted her to spend her savings on a trip.',
    partOfSpeech: 'noun'
  },
  {
    word: 'alpine',
    definition: 'Relating to high mountains, especially the Alps; growing on mountains above the tree line',
    example: 'Alpine flowers thrive in cold, high-altitude environments.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'animosity',
    definition: 'Strong hostility or opposition',
    example: 'Despite years of animosity between them, the two siblings eventually reconciled.',
    partOfSpeech: 'noun'
  },
  {
    word: 'hostility',
    definition: 'Unfriendly or antagonistic attitudes or behavior; opposition or resistance',
    example: 'The hostility between the two neighboring countries has lasted for decades.',
    partOfSpeech: 'noun'
  },
  {
    word: 'misdemeanour',
    definition: 'A minor wrongdoing; a minor criminal offense',
    example: 'Jaywalking is considered a minor misdemeanour in most cities.',
    partOfSpeech: 'noun'
  },
  {
    word: 'transgression',
    definition: 'An act that goes against a law, rule, or code of conduct; a sin',
    example: 'The student apologized for his transgression of the school rules.',
    partOfSpeech: 'noun'
  },
  {
    word: 'offence',
    definition: 'An illegal act; a thing causing someone to feel resentful or upset',
    example: 'He apologized, not wanting to cause any offence by his comments.',
    partOfSpeech: 'noun'
  },
  {
    word: 'digress',
    definition: 'To leave the main subject temporarily in speech or writing',
    example: 'Let me digress for a moment to explain how this technology works.',
    partOfSpeech: 'verb'
  },
  {
    word: 'blemish',
    definition: 'A small mark or flaw that spoils the appearance of something',
    example: 'The car was in perfect condition, without a single blemish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'kink',
    definition: 'A sharp twist or curl in something that is otherwise straight; or an unusual or peculiar characteristic',
    example: 'There was a kink in the garden hose that stopped the water flow.',
    partOfSpeech: 'noun'
  },
  {
    word: 'abscond',
    definition: 'To leave hurriedly and secretly, typically to escape from custody or avoid prosecution',
    example: 'The suspect absconded before the police could arrest him.',
    partOfSpeech: 'verb'
  },
  {
    word: 'potential',
    definition: 'Having or showing the capacity to become or develop into something in the future',
    example: 'The young athlete has the potential to become a champion.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'respite',
    definition: 'A short period of rest or relief from something difficult or unpleasant',
    example: 'The cool breeze provided a welcome respite from the summer heat.',
    partOfSpeech: 'noun'
  },
  {
    word: 'recuperate',
    definition: 'To recover from illness or exertion',
    example: 'After the surgery, she took two weeks off work to recuperate.',
    partOfSpeech: 'verb'
  },
  {
    word: 'deception',
    definition: 'The act of deliberately causing someone to believe something that is not true',
    example: 'The magician\'s performance relied on skillful deception to create illusions.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inception',
    definition: 'The beginning or founding of something; the establishment',
    example: 'The company has grown significantly since its inception five years ago.',
    partOfSpeech: 'noun'
  },
  {
    word: 'boundless',
    definition: 'Having no bounds; unlimited or immense',
    example: 'The parent\'s boundless love supported the child through difficult times.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'falter',
    definition: 'To lose strength or momentum; to hesitate or stumble',
    example: 'His voice began to falter as he became more nervous during the speech.',
    partOfSpeech: 'verb'
  },
  {
    word: 'finite',
    definition: 'Having limits or bounds; not infinite or endless',
    example: 'We must use our finite resources wisely to ensure they last.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'resonate',
    definition: 'To produce or be filled with a deep, full, reverberating sound; or to evoke a strong feeling or memory',
    example: 'His story about overcoming obstacles resonated with the audience.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prophecy',
    definition: 'A prediction of what will happen in the future',
    example: 'According to the ancient prophecy, a great leader would emerge during times of trouble.',
    partOfSpeech: 'noun'
  },
  {
    word: 'aphid',
    definition: 'A small sap-sucking insect that commonly attacks vegetation',
    example: 'The gardener used ladybugs to naturally control aphids on her plants.',
    partOfSpeech: 'noun'
  },
  {
    word: 'articulate',
    definition: 'Having or showing the ability to speak fluently and coherently; or to express ideas clearly',
    example: 'The articulate speaker kept the audience engaged throughout the presentation.',
    partOfSpeech: 'adjective/verb'
  },
  {
    word: 'ability',
    definition: 'Possession of the means or skill to do something',
    example: 'Her ability to solve complex problems quickly impressed her teachers.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gutless',
    definition: 'Lacking courage or determination',
    example: 'It would be gutless to give up without even trying.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'undeterred',
    definition: 'Not discouraged or prevented from proceeding',
    example: 'Undeterred by the rain, the hikers continued along the trail.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'enunciate',
    definition: 'To say or pronounce clearly',
    example: 'The speech teacher asked students to enunciate each syllable carefully.',
    partOfSpeech: 'verb'
  },
  {
    word: 'benign',
    definition: 'Gentle and kind; not harmful or malicious',
    example: 'The tumor was benign and not a cause for serious concern.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'instill',
    definition: 'To gradually but firmly establish an idea or attitude in a person\'s mind',
    example: 'Parents try to instill good values in their children from a young age.',
    partOfSpeech: 'verb'
  },
  {
    word: 'retort',
    definition: 'To reply sharply in a witty or angry way',
    example: 'When criticized, she was quick to retort with a clever comeback.',
    partOfSpeech: 'verb'
  },
  {
    word: 'commence',
    definition: 'To begin or start',
    example: 'The ceremony will commence at noon.',
    partOfSpeech: 'verb'
  },
  {
    word: 'propagate',
    definition: 'To breed or multiply by natural reproduction; or to spread and promote an idea or knowledge',
    example: 'The gardener learned how to propagate plants from cuttings.',
    partOfSpeech: 'verb'
  },
  {
    word: 'unify',
    definition: 'To make or become united or uniform',
    example: 'The leader worked to unify the different factions within the organization.',
    partOfSpeech: 'verb'
  },
  {
    word: 'terminate',
    definition: 'To bring to an end; conclude',
    example: 'The company decided to terminate the project due to budget constraints.',
    partOfSpeech: 'verb'
  },
  {
    word: 'impersonate',
    definition: 'To pretend to be another person for entertainment or fraud',
    example: 'The comedian was skilled at impersonating famous politicians.',
    partOfSpeech: 'verb'
  },
  {
    word: 'concise',
    definition: 'Giving a lot of information clearly and in a few words; brief but comprehensive',
    example: 'The manual provides concise instructions that are easy to follow.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'erroneous',
    definition: 'Wrong; incorrect',
    example: 'The newspaper published an erroneous report and later issued a correction.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'embellish',
    definition: 'To make more attractive by adding ornament, color, etc.; or to make a statement or story more interesting by adding untrue details',
    example: 'She tended to embellish her travel stories to make them more exciting.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fortify',
    definition: 'To strengthen or invigorate; to provide with defensive works',
    example: 'The walls were fortified to protect the castle from invaders.',
    partOfSpeech: 'verb'
  },
  {
    word: 'remedy',
    definition: 'A medicine or treatment for a disease or injury; or a way of solving or correcting a problem',
    example: 'Regular exercise is a good remedy for stress.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'loiter',
    definition: 'To stand or wait around idly without apparent purpose',
    example: 'Signs warned people not to loiter near the entrance to the building.',
    partOfSpeech: 'verb'
  },
  {
    word: 'apprehension',
    definition: 'Anxiety or fear that something bad or unpleasant will happen; or understanding',
    example: 'There was some apprehension among team members about the new project.',
    partOfSpeech: 'noun'
  },
  {
    word: 'fable',
    definition: 'A short story, typically with animals as characters, conveying a moral',
    example: 'Aesop\'s fables have been teaching moral lessons for centuries.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gratification',
    definition: 'Pleasure, especially when gained from the satisfaction of a desire',
    example: 'The immediate gratification of winning was followed by a sense of accomplishment.',
    partOfSpeech: 'noun'
  },
  {
    word: 'supercalifragilisticexpialidocious',
    definition: 'Extraordinarily good; wonderful',
    example: 'In the film Mary Poppins, the magical nanny describes the joy of the fair as being absolutely supercalifragilisticexpialidocious.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intrigue',
    definition: 'To arouse the curiosity or interest of; fascinate; or to make secret plans to harm someone',
    example: 'The mysterious package intrigued everyone in the office.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'arouse',
    definition: 'To evoke or awaken a feeling, emotion, or response',
    example: 'The controversial speech aroused strong reactions from the audience.',
    partOfSpeech: 'verb'
  },
  {
    word: 'metamorphism',
    definition: 'The process of transformation, especially a change in the structure of rock due to heat or pressure',
    example: 'Marble is formed by the metamorphism of limestone under intense heat and pressure.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ambivalent',
    definition: 'Having mixed feelings or contradictory ideas about something or someone',
    example: 'She felt ambivalent about moving to a new city—excited for the opportunity but sad to leave friends behind.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'thicket',
    definition: 'A dense group of bushes or small trees',
    example: 'The rabbit disappeared into the thicket where the hunters couldn\'t follow.',
    partOfSpeech: 'noun'
  },
  {
    word: 'Pourquoi Story',
    definition: 'A fictional narrative that explains why something is the way it is, often found in folklore and children\'s literature',
    example: 'The pourquoi story explained why the tortoise has a cracked shell.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'caters',
    definition: 'Provides food and service for an event; or provides what is required or sought',
    example: 'This restaurant caters for large events like weddings and conferences.',
    partOfSpeech: 'verb (third person)'
  },
  {
    word: 'semicolon',
    definition: 'A punctuation mark (;) indicating a pause, typically between two main clauses, that is more pronounced than that indicated by a comma',
    example: 'The writer used a semicolon to join two closely related independent clauses.',
    partOfSpeech: 'noun'
  },
  {
    word: 'reported speech',
    definition: 'The form of language used to communicate what someone else said without quoting them directly',
    example: 'In reported speech, "I am tired" becomes "He said he was tired."',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'blatant',
    definition: 'Completely obvious and intentional, when referring to bad behavior',
    example: 'His blatant disregard for the rules resulted in immediate disqualification.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'svelte',
    definition: 'Slender and elegant',
    example: 'The dancer had a svelte figure that moved gracefully across the stage.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'botany',
    definition: 'The scientific study of plants',
    example: 'She studied botany to learn more about medicinal plants and their properties.',
    partOfSpeech: 'noun'
  },
  {
    word: 'bountiful',
    definition: 'Large in quantity; abundant',
    example: 'The farm produced a bountiful harvest after the rainy season.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ambient',
    definition: 'Relating to the immediate surroundings; or creating a particular atmosphere or mood',
    example: 'The restaurant used ambient lighting to create a relaxed mood.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'compromise',
    definition: 'An agreement reached by each side making concessions; or to settle a dispute by mutual concession',
    example: 'Through compromise, the two sides were able to reach an agreement.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'superiority',
    definition: 'The quality or state of being better, greater, or stronger than others',
    example: 'The team\'s superiority was evident in their undefeated season.',
    partOfSpeech: 'noun'
  },
  {
    word: 'weighing up',
    definition: 'Carefully considering or assessing the relative qualities of something before making a decision',
    example: 'She spent time weighing up the pros and cons before deciding which job offer to accept.',
    partOfSpeech: 'verb phrase'
  },
  {
    word: 'despise',
    definition: 'To feel contempt or a deep repugnance for',
    example: 'She despises dishonesty in any form.',
    partOfSpeech: 'verb'
  },
  {
    word: 'scathe',
    definition: 'To harm, injure, or damage; to criticize severely',
    example: 'His scathing remarks left her feeling hurt and embarrassed.',
    partOfSpeech: 'verb'
  },
  {
    word: 'haughty',
    definition: 'Arrogantly superior and disdainful',
    example: 'The haughty waiter looked down his nose at customers who didn\'t order expensive wine.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'aloft',
    definition: 'Up in or into the air; overhead',
    example: 'The eagle soared aloft on the warm air currents.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'spoof',
    definition: 'A humorous imitation of something, typically a film or a particular genre of film, in which its characteristic features are exaggerated for comic effect',
    example: 'The comedy show included a hilarious spoof of popular superhero movies.',
    partOfSpeech: 'noun'
  },
  {
    word: 'malicious',
    definition: 'Characterized by malice; intending or intended to do harm',
    example: 'The virus was designed with malicious intent to steal personal information.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'amicable',
    definition: 'Characterized by friendliness and absence of serious disagreement',
    example: 'Despite their divorce, they maintained an amicable relationship for the sake of their children.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'primarily',
    definition: 'For the most part; mainly',
    example: 'The museum is primarily used for educational purposes.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'initial',
    definition: 'Existing or occurring at the beginning',
    example: 'Her initial reaction was one of shock, but she quickly recovered.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'embed',
    definition: 'To fix firmly and deeply in a surrounding mass; to incorporate',
    example: 'The journalist was embedded with troops during the conflict.',
    partOfSpeech: 'verb'
  },
  {
    word: 'preclude',
    definition: 'To prevent from happening; make impossible',
    example: 'His criminal record precluded him from certain types of employment.',
    partOfSpeech: 'verb'
  },
  {
    word: 'commence',
    definition: 'To begin or start',
    example: 'The concert will commence at 8 p.m. sharp.',
    partOfSpeech: 'verb'
  },
  {
    word: 'conclude',
    definition: 'To bring to an end; finish; or to reach a judgment or opinion by reasoning',
    example: 'The meeting concluded with a vote on the proposal.',
    partOfSpeech: 'verb'
  },
  {
    word: 'slob',
    definition: 'A person who is lazy and has low standards of cleanliness',
    example: 'His roommate was a slob who never cleaned up after himself.',
    partOfSpeech: 'noun'
  },
  {
    word: 'marvelled',
    definition: 'Was filled with wonder or astonishment',
    example: 'The tourists marvelled at the magnificent architecture of the ancient temple.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'rampant',
    definition: 'Flourishing or spreading unchecked; unrestrained',
    example: 'Corruption was rampant throughout the organization.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'denounce',
    definition: 'To publicly declare to be wrong or evil; censure',
    example: 'The politician denounced the policy as harmful and unjust.',
    partOfSpeech: 'verb'
  },
  {
    word: 'condemn',
    definition: 'To express complete disapproval of; censure; or to sentence to a particular punishment',
    example: 'The judge condemned the criminal to life in prison.',
    partOfSpeech: 'verb'
  },
  {
    word: 'rigorous',
    definition: 'Extremely thorough, exhaustive, or accurate',
    example: 'The scientist conducted rigorous experiments to test his hypothesis.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'attribute',
    definition: 'To regard as being caused by; or a quality or feature regarded as a characteristic',
    example: 'Experts attribute the decline in crime to better community policing.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'painstaking',
    definition: 'Done with or employing great care and thoroughness',
    example: 'The restoration of the painting was a painstaking process that took years to complete.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fauna',
    definition: 'The animals of a particular region, habitat, or geological period',
    example: 'The island\'s unique fauna includes several species found nowhere else on Earth.',
    partOfSpeech: 'noun'
  },
  {
    word: 'flora',
    definition: 'The plants of a particular region, habitat, or geological period',
    example: 'Desert flora has adapted to survive in hot, dry conditions.',
    partOfSpeech: 'noun'
  },
  {
    word: 'blemish',
    definition: 'A small mark or flaw that spoils the appearance of something',
    example: 'The car was in excellent condition without a single blemish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'herbalist',
    definition: 'A person who practices healing by using herbs and plants',
    example: 'The herbalist recommended chamomile tea to help with sleep problems.',
    partOfSpeech: 'noun'
  },
  {
    word: 'geologist',
    definition: 'A scientist who studies the solid and liquid matter that constitutes the Earth',
    example: 'The geologist examined the rock formations to determine their age.',
    partOfSpeech: 'noun'
  },
  {
    word: 'zoologist',
    definition: 'A scientist who studies the behavior, structure, physiology, classification, and distribution of animals',
    example: 'As a zoologist, she specialized in the study of primate behavior.',
    partOfSpeech: 'noun'
  },
  {
    word: 'impose',
    definition: 'To force or lay (something) on or upon; or to force oneself on others',
    example: 'The government imposed new taxes on luxury goods.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fervour',
    definition: 'Intense and passionate feeling',
    example: 'The speaker addressed the crowd with religious fervour.',
    partOfSpeech: 'noun'
  },
  {
    word: 'surreptitious',
    definition: 'Kept secret, especially because it would not be approved of',
    example: 'She took a surreptitious glance at the answers when the teacher wasn\'t looking.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'clandestine',
    definition: 'Kept secret or done secretively, especially because illicit',
    example: 'The spies held clandestine meetings to exchange information.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'co-write',
    definition: 'To write something together with another person',
    example: 'The songwriters decided to co-write the album\'s lead single.',
    partOfSpeech: 'verb'
  },
  {
    word: 'co-author',
    definition: 'To be a joint author of a book, paper, or other written work',
    example: 'The two scientists decided to co-author the research paper.',
    partOfSpeech: 'verb'
  },
  {
    word: 'invalid',
    definition: 'Not valid; null; or a person made weak or disabled by illness or injury',
    example: 'The contract became invalid when he failed to sign it by the deadline.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'fallacious',
    definition: 'Based on a mistaken belief; logically unsound',
    example: 'His argument was fallacious because it relied on incorrect assumptions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'scanty',
    definition: 'Small or insufficient in quantity or amount',
    example: 'The evidence against him was too scanty for a conviction.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'realign',
    definition: 'To change or restore to a different or former position or state',
    example: 'They had to realign their strategy to adapt to the changing market.',
    partOfSpeech: 'verb'
  },
  {
    word: 'convince',
    definition: 'To persuade someone to do something or to believe something is true',
    example: 'Nothing would convince her to change her mind once it was made up.',
    partOfSpeech: 'verb'
  },
  {
    word: 'symposium',
    definition: 'A conference or meeting to discuss a particular subject',
    example: 'Experts from around the world attended the symposium on climate change.',
    partOfSpeech: 'noun'
  },
  {
    word: 'possessive pronoun',
    definition: 'A pronoun that shows ownership, such as "mine," "yours," "his," "hers," "its," "ours," and "theirs"',
    example: 'In the sentence "That book is mine," the word "mine" is a possessive pronoun.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'proverb',
    definition: 'A short, well-known pithy saying, stating a general truth or piece of advice',
    example: '"A stitch in time saves nine" is a proverb about the value of fixing problems early.',
    partOfSpeech: 'noun'
  },
  {
    word: 'putt',
    definition: 'A gentle stroke in golf designed to roll the ball into the hole',
    example: 'He needed just one putt to complete the hole.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'delegate',
    definition: 'A person sent or authorized to represent others; or to entrust a task to another person',
    example: 'She learned to delegate responsibilities to her team members.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'convention',
    definition: 'A way in which something is usually done; or a large meeting of people with a shared interest',
    example: 'By convention, people shake hands when they meet for the first time in formal situations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'transitory',
    definition: 'Not permanent; temporary',
    example: 'Fame can be transitory, especially in the entertainment industry.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perpetual',
    definition: 'Never ending or changing; continuing indefinitely',
    example: 'The perpetual motion of the ocean waves has inspired many poets.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intermittent',
    definition: 'Occurring at irregular intervals; not continuous or steady',
    example: 'The radio signal was intermittent due to the storm.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'conjugate',
    definition: 'To give the different forms of a verb in an ordered way; or to join together',
    example: 'Students learn to conjugate verbs in their different tenses.',
    partOfSpeech: 'verb'
  },
  {
    word: 'inflect',
    definition: 'To change the form of a word to express tense, gender, number, mood, etc.',
    example: 'In English, we inflect verbs to show past tense by usually adding -ed.',
    partOfSpeech: 'verb'
  },
  {
    word: 'accident-prone',
    definition: 'Having a tendency to have more accidents than most people',
    example: 'Her accident-prone nature meant she was always covered in bruises.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'leprechaun',
    definition: 'A mischievous elf in Irish folklore, often associated with hidden treasure',
    example: 'In stories, if you catch a leprechaun, he must lead you to his pot of gold.',
    partOfSpeech: 'noun'
  }
];

export default vocabularyWords;
