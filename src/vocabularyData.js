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
  }
];

export default vocabularyWords;
