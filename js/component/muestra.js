export default {
    props: [
        name= String,
        lastname=String,
        age= Number,
    ],
    template:  `
    <table class="table table-responsive table-striped">
    <tbody>
        <tr>
           
            <td v-text= {{name}} ></td>
            <td v-text= {{lastname}}></td>
            <td v-text=  {{age}}></td>
            

        </tr>
        
    </tbody>
</table>
`,

};