import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import Grid from '../common/layout/grid'
import List from '../billingCycle/billingCycleList'
import Form from '../billingCycle/billingCycleForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create, update, remove } from '../billingCycle/billingCycleActions'

class BillingCycle extends Component {

    componentDidMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Grid cols={"12 12"}>
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label="Listar" icon="bars" target="tabList" />
                                <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                                <TabHeader label="Alterar" icon="pencil-alt" target="tabUpdate" />
                                <TabHeader label="Excluir" icon="trash" target="tabDelete" />

                            </TabsHeader>
                            <TabsContent>
                                <TabContent id="tabList">
                                    <List />
                                </TabContent>
                                <TabContent id="tabCreate">
                                    <Form onSubmit={this.props.create} />
                                </TabContent>
                                <TabContent id="tabUpdate">
                                    <Form onSubmit={this.props.update} />
                                </TabContent>
                                <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} />
                                </TabContent>
                            </TabsContent>
                        </Tabs>
                    </Grid>
                </Content>
            </div>
        )
    }
}

const mapDispathToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)
export default connect(null, mapDispathToProps) (BillingCycle)