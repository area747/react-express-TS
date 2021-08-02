import React, {Component} from 'react';
import {Button, ButtonToolbar, Col, Form, FormControl, Row} from 'react-bootstrap';

interface State {
    value: string;
}

export class LoginModule extends Component<State> {
    constructor(prop) {
        super(prop);
        this.state = {
            value: prop.value,
        };
    }

    state: State;

    render() {
        return (
            <div>
                <Form method="post" action="login/local">
                    <Row>
                        <Col>
                            <FormControl name="id" />
                            <FormControl name="pw" type="password" />
                            <Button type="submit" variant="primary">
                                {this.state.value}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}
