export default function PropertyInputField(props:any) {
    return(<>
    <div className="sm:col-span-2">
        <label htmlFor={props.attr}>
            <b>{props.attr}</b>
        </label>
        <div className="mt-2.5">
            <input
                type={props.Type}
                name={props.attr}
                onChange={props.changer}
                value={props.formattr}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
    </div>
    </>);
}