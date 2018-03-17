import React, {Component} from 'react'

export default function(Components) {
    return class extends Component {
            render() {
                const {selectTag, d} = this.props
                const tag = d.data ? d.data.tag : d.tag

                return (
                    <Components
                        onMouseOver = {() => selectTag(tag)}
                        onMouseOut = {() => selectTag(null)}
                        {...this.props}
                    />
                )
            }
        }
}
