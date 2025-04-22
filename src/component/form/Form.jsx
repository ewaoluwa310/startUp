import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./Form.css";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import { motion } from "framer-motion";

const Form = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e4412fb-c901-4f89-aa0f-4777d4ba818b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section
      initial={{ opacity: 0, translateX: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="form  my-5 d-flex align-items-center"
    >
      <div className="image-overlay w-100 d-flex align-items-center">
        <div className="container-lg px-4">
          <div className="d-md-flex justify-content-md-center align-items-center">
            <motion.div
              initial={{ opacity: 0, translateY: -100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 2, type: "ease-in-out" }}
              className="col-lg-4 col-md-6 col-12 mx-lg-3 mx-md-0 mx-auto text-white px-3"
            >
              <h3 className="fw-bolder">
                We solve digital problems with an outstanding creative flare
              </h3>
              <p className="py-3">
                We have created a new product that will help designers,
                developers and companies create websites for their startups
                quickly and easily.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, type: "ease-out" }}
              className="col-lg-4 col-md-6 col-12 my-lg-0 my-5 "
            >
              <Container className="bg-white mx-lg-3 mx-md-2 mx-0 rounded-3 pt-lg-2 pb-lg-0 py-5">
                <Row className="justify-content-center ">
                  <Tabs
                    justify
                    variant="underline"
                    defaultActiveKey="tab-1"
                    className="py-4"
                  >
                    <Tab
                      eventKey="tab-1"
                      title="SIGN UP"
                      className="mx-lg-4 mx-1"
                    >
                      <form onSubmit={onSubmit} className="">
                        <div className="mx-lg-3 mx-0">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="w-100 my-3 py-md-2 py-4 px-md-3 px-5 rounded-pill border border-none"
                            required
                          />

                          <input
                            type="password"
                            placeholder="Your password"
                            className=" w-100 my-3 py-md-2 py-4 px-md-3 px-5 rounded-pill border border-none"
                            required
                          />

                          <div className="text-center py-4">
                            <button className="push-button d-block w-100 py-md-2 py-3 border border-none rounded-pill text-white">
                              Create an Account
                            </button>
                            <span className="text-primary">{result}</span>
                            <p className="my-3 text-center">or</p>
                            <button className="toggle d-block w-100 py-md-2 py-3 border border-none rounded-pill text-white">
                              Login via Twitter
                            </button>
                          </div>
                        </div>
                      </form>
                    </Tab>

                    <Tab
                      eventKey="tab-2"
                      title="LOGIN"
                      className="mx-lg-5 mx-1"
                    >
                      <form action="">
                        <div className="mx-lg-2 mx-0">
                          <input
                            type="email"
                            placeholder="Your email"
                            className="w-100 my-3 py-md-2 py-4 px-md-3 px-5 rounded-pill border border-none"
                            required
                          />

                          <input
                            type="password"
                            placeholder="Your password"
                            className=" w-100 my-3 py-md-2 py-4 px-md-3 px-5 rounded-pill border border-none"
                            required
                          />

                          <div className="text-center py-4">
                            <button className="push-button d-block w-100 py-md-2 py-3 border border-none rounded-pill text-white">
                              Login
                            </button>
                          </div>
                        </div>
                      </form>
                    </Tab>
                  </Tabs>
                </Row>
              </Container>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
