import {Button, Form, Jumbotron} from "react-bootstrap";

import Container from "react-bootstrap/Container";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {useEffect, useState} from "react";


const CustomForm = ({ status, message, onValidated }) => {

    const modalOpen = true;

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });

    }

    useEffect(() => {
        if(status === "success") clearFields();
        if(modalOpen && status === "success") clearFields();
    }, [status, modalOpen])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }


    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>

            <h3 className="mc__title">
                {status === "success" ? "Success!" :
                    "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            <div className="mc__field-container">

                {status !== "success" ? (
                    <>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                onChange={(event) => {setFirstName(event.currentTarget.value)}}
                                type="text"
                                value={firstName}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                onChange={(event) => {setLastName(event.currentTarget.value)}}
                                type="text"
                                value={lastName}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={(event) => {setEmail(event.currentTarget.value)}}
                                type="email"
                                value={email}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Subscribe
                        </Button>
                    </>

                ): null}
            </div>
        </form>
    );
};

function SubscribeNewsletterJumbo() {
    const url = `/api/subscribe?a=a`;

    return (
        <Jumbotron className={"min-vh-10"}>
            <Container className={""}>

                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />

            </Container>

        </Jumbotron>
    );
}

export default SubscribeNewsletterJumbo;