import React, {Component} from 'react';
import {Button, ButtonToolbar, Col, Form, FormControl, Row} from 'react-bootstrap';

interface State {
    value: number;
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
                <Form>
                    <Row>
                        <Col>
                            <FormControl />
                        </Col>
                    </Row>
                </Form>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => alert('click')}>
                        {this.state.value}
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}
