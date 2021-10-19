import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './FAQs.css';
const FAQs = () => {
    return (
        <div>
            {/* --------------visualizing FAQ Answer------------------ */}
            <Container className="text-start mt-5">
                <h2 className="my-5 custom-color-primary">Frequently Asked Questions-</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card className="mb-2 faq-card-style"
                        >
                            <Card.Header><h3 className="custom-color-secondary">DO I NEED TO WORK OUT EVERY DAY?</h3></Card.Header>
                            <Card.Body>
                                <Card.Title>   </Card.Title>
                                <Card.Text>
                                    <p>No, you do not need to work out every day. In fact, in most cases, I would recommend at least 1-2 days of total rest a week. However, just because you have a rest or recovery day scheduled into your calendar, doesn’t necessarily mean you aren’t active at all on these days. Light, regular movement such as walking your dog around the block, or taking time for stretching or foam rolling are great recovery techniques to help increase blood flow and reduce tension in tight muscles. Participating in regular rest days and practicing a well-balanced recovery routine can help you reduce your risk for injury and promote the longevity of your fitness routine.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="mb-2 faq-card-style"
                        >
                            <Card.Header><h3 className="custom-color-secondary">HOW LONG SHOULD I WORK OUT FOR?</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>In general, your workouts do not need to be long to be effective. Many people who are new to fitness imagine slogging around for hours on the treadmill. This doesn’t need to be the case.

                                        The length of your workout will largely depend on your fitness level, as well as the type of training and intensity you’re working out at. The CDC recommends at least 30 minutes of moderate intensity aerobic activity 5 days a week, as well as 2 full body strength training sessions (1). Making sure you’re hitting these minimums for exercise is a great way to make sure you’re on track. However, if you’re under the recommendation, it’s okay, we all have to start somewhere!

                                        When it comes to the type of workout you’re completing - HIIT, circuit training sessions, or sprints will typically be quicker than moderate intensity cardio sessions, as you’re working out at a higher intensity. For strength training sessions, you may want to schedule more time for warming up and resting between sets..</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-2 faq-card-style"
                        >
                            <Card.Header><h3 className="custom-color-secondary">HOW CAN I INCREASE LEAN MUSCLE MASS?</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>Adding heavy strength training into your routine is just one way to increase lean muscle mass. But there are actually many ways to increase strong lean muscle tone in your body. Any form of resistance that your muscles have to fight against that is greater than what they normally experience, can help stimulate the muscle growth process. Completing exercises with your body weight or resistance bands are also effective ways of training to build strength. Start with what you feel most comfortable with and continue building from there. As your exercises or the weight you’re using start to feel too easy, increase your weight or choose more challenging exercises to continue challenging your muscles and seeing results.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-2 faq-card-style"
                        >
                            <Card.Header> <h3 className="custom-color-secondary">HOW MUCH WEIGHT SHOULD I USE WHEN STRENGTH TRAINING?</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>When strength training, it’s important to always remember that the workout you’re performing is ‘your workout’. Don’t focus on the amount of weight others are using to complete workouts. Instead, focus on your rate of perceived exertion on a scale of 1 to 10. When strength training, you should feel a perceived exertion of 7 to 9, each rep should feel challenging with the last reps and sets feeling significantly harder. If you complete a workout and aren’t feeling challenged, you know it’s time to move up in weight the next time you complete that workout.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-2 faq-card-style"
                        >
                            <Card.Header> <h3 className="custom-color-secondary">HOW MUCH WEIGHT SHOULD I USE WHEN STRENGTH TRAINING?</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>When strength training, it’s important to always remember that the workout you’re performing is ‘your workout’. Don’t focus on the amount of weight others are using to complete workouts. Instead, focus on your rate of perceived exertion on a scale of 1 to 10. When strength training, you should feel a perceived exertion of 7 to 9, each rep should feel challenging with the last reps and sets feeling significantly harder. If you complete a workout and aren’t feeling challenged, you know it’s time to move up in weight the next time you complete that workout.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mb-2 faq-card-style"
                        >
                            <Card.Header> <h3 className="custom-color-secondary">WHAT TRAINING SHOULD I BE DOING TO LOSE WEIGHT?</h3></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>When it comes to weight loss, I like to focus on a full scale approach. Regular cardio training is great for increasing your daily calorie burn. While strength training will help you build lean muscle, which will increase your metabolism and help you burn more calories at rest!

                                        I’d also recommend adding in a few HIIT sessions per week, rather it be your favorite type of cardio, bodyweight, or light dumbbell exercises. HIIT is designed to get your body working at high intensities, burning a ton of calories in a short period of time. Create a schedule with a blend of regular cardio, a few full body strength training sessions, and a few HIIT training sessions each week.

                                        Finally, don’t forget to eat a healthy, well balanced diet emphasizing whole foods. With weight loss it’s important to maximize the nutrients in the calories you’re consuming to fuel your workouts!</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FAQs;