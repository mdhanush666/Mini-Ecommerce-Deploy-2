import React, { useEffect } from 'react';

const MyComponent = () => {

    useEffect(() => {
        const handleScroll = () => console.log('hi');
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return <div>
        <p>
        Scroll to see the effect
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam fugit omnis culpa enim non rem saepe voluptatibus optio dolores et sed ratione, eveniet assumenda quo sint porro, ex voluptate.
        Provident, aperiam? Quae nemo maxime ipsa culpa dolorem expedita suscipit quos iure fugit modi cum quaerat repudiandae nam consequuntur incidunt, officia adipisci eius, beatae laudantium maiores praesentium. Perferendis, distinctio quas?
        Deserunt quae placeat cumque, laborum accusamus incidunt sint pariatur corporis aspernatur, recusandae blanditiis, eum exercitationem dicta aut commodi eligendi quis doloremque perferendis maiores tenetur rem velit in quos? Vitae, tempore.
        Vel quisquam possimus aspernatur ab eveniet porro, exercitationem animi sunt unde delectus iusto maiores illum magni nihil dolore fugit quo fuga. Fugiat et quae accusamus distinctio eveniet nemo placeat molestias.
        Eaque facilis at hic quidem, temporibus, sapiente reprehenderit similique ullam dolore est mollitia quo doloremque dolorem consequatur soluta, corrupti nisi a esse aliquam repellendus? Enim delectus aspernatur quo officia recusandae.
        Error asperiores nisi aut ad! Aliquid tempore sequi quibusdam eos quod, ratione ex sit quam repudiandae optio incidunt dolore quas in, natus officia neque. Optio amet repudiandae culpa autem placeat?
        Est autem quas eligendi, nostrum architecto tempora, soluta fuga vitae sapiente expedita doloremque placeat harum qui nam consequatur facere a sunt eos enim at libero eaque deleniti tempore voluptates. Odio!
        Nobis, consectetur! Animi quis est obcaecati adipisci? A laudantium iste nisi eius voluptatibus. Deleniti, eius exercitationem, officia, ea magni inventore tempore nemo perferendis quidem asperiores illo repellendus illum consequatur ullam.
        Neque maxime quam consequuntur illo, excepturi facere quaerat reiciendis fuga magnam quidem et reprehenderit explicabo tenetur iure soluta rerum eligendi? Ad voluptas eveniet excepturi dolore, optio harum. Nobis, totam itaque!
        Optio placeat, quos tempore atque omnis nobis eligendi dolores animi modi porro eaque nostrum soluta totam corrupti reprehenderit molestias pariatur ex quas suscipit adipisci nesciunt nam. Ullam debitis cumque modi.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam fugit omnis culpa enim non rem saepe voluptatibus optio dolores et sed ratione, eveniet assumenda quo sint porro, ex voluptate.
        Provident, aperiam? Quae nemo maxime ipsa culpa dolorem expedita suscipit quos iure fugit modi cum quaerat repudiandae nam consequuntur incidunt, officia adipisci eius, beatae laudantium maiores praesentium. Perferendis, distinctio quas?
        Deserunt quae placeat cumque, laborum accusamus incidunt sint pariatur corporis aspernatur, recusandae blanditiis, eum exercitationem dicta aut commodi eligendi quis doloremque perferendis maiores tenetur rem velit in quos? Vitae, tempore.
        Vel quisquam possimus aspernatur ab eveniet porro, exercitationem animi sunt unde delectus iusto maiores illum magni nihil dolore fugit quo fuga. Fugiat et quae accusamus distinctio eveniet nemo placeat molestias.
        Eaque facilis at hic quidem, temporibus, sapiente reprehenderit similique ullam dolore est mollitia quo doloremque dolorem consequatur soluta, corrupti nisi a esse aliquam repellendus? Enim delectus aspernatur quo officia recusandae.
        Error asperiores nisi aut ad! Aliquid tempore sequi quibusdam eos quod, ratione ex sit quam repudiandae optio incidunt dolore quas in, natus officia neque. Optio amet repudiandae culpa autem placeat?
        Est autem quas eligendi, nostrum architecto tempora, soluta fuga vitae sapiente expedita doloremque placeat harum qui nam consequatur facere a sunt eos enim at libero eaque deleniti tempore voluptates. Odio!
        Nobis, consectetur! Animi quis est obcaecati adipisci? A laudantium iste nisi eius voluptatibus. Deleniti, eius exercitationem, officia, ea magni inventore tempore nemo perferendis quidem asperiores illo repellendus illum consequatur ullam.
        Neque maxime quam consequuntur illo, excepturi facere quaerat reiciendis fuga magnam quidem et reprehenderit explicabo tenetur iure soluta rerum eligendi? Ad voluptas eveniet excepturi dolore, optio harum. Nobis, totam itaque!
        Optio placeat, quos tempore atque omnis nobis eligendi dolores animi modi porro eaque nostrum soluta totam corrupti reprehenderit molestias pariatur ex quas suscipit adipisci nesciunt nam. Ullam debitis cumque modi.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam fugit omnis culpa enim non rem saepe voluptatibus optio dolores et sed ratione, eveniet assumenda quo sint porro, ex voluptate.
        Provident, aperiam? Quae nemo maxime ipsa culpa dolorem expedita suscipit quos iure fugit modi cum quaerat repudiandae nam consequuntur incidunt, officia adipisci eius, beatae laudantium maiores praesentium. Perferendis, distinctio quas?
        Deserunt quae placeat cumque, laborum accusamus incidunt sint pariatur corporis aspernatur, recusandae blanditiis, eum exercitationem dicta aut commodi eligendi quis doloremque perferendis maiores tenetur rem velit in quos? Vitae, tempore.
        Vel quisquam possimus aspernatur ab eveniet porro, exercitationem animi sunt unde delectus iusto maiores illum magni nihil dolore fugit quo fuga. Fugiat et quae accusamus distinctio eveniet nemo placeat molestias.
        Eaque facilis at hic quidem, temporibus, sapiente reprehenderit similique ullam dolore est mollitia quo doloremque dolorem consequatur soluta, corrupti nisi a esse aliquam repellendus? Enim delectus aspernatur quo officia recusandae.
        Error asperiores nisi aut ad! Aliquid tempore sequi quibusdam eos quod, ratione ex sit quam repudiandae optio incidunt dolore quas in, natus officia neque. Optio amet repudiandae culpa autem placeat?
        Est autem quas eligendi, nostrum architecto tempora, soluta fuga vitae sapiente expedita doloremque placeat harum qui nam consequatur facere a sunt eos enim at libero eaque deleniti tempore voluptates. Odio!
        Nobis, consectetur! Animi quis est obcaecati adipisci? A laudantium iste nisi eius voluptatibus. Deleniti, eius exercitationem, officia, ea magni inventore tempore nemo perferendis quidem asperiores illo repellendus illum consequatur ullam.
        Neque maxime quam consequuntur illo, excepturi facere quaerat reiciendis fuga magnam quidem et reprehenderit explicabo tenetur iure soluta rerum eligendi? Ad voluptas eveniet excepturi dolore, optio harum. Nobis, totam itaque!
        Optio placeat, quos tempore atque omnis nobis eligendi dolores animi modi porro eaque nostrum soluta totam corrupti reprehenderit molestias pariatur ex quas suscipit adipisci nesciunt nam. Ullam debitis cumque modi.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam fugit omnis culpa enim non rem saepe voluptatibus optio dolores et sed ratione, eveniet assumenda quo sint porro, ex voluptate.
        Provident, aperiam? Quae nemo maxime ipsa culpa dolorem expedita suscipit quos iure fugit modi cum quaerat repudiandae nam consequuntur incidunt, officia adipisci eius, beatae laudantium maiores praesentium. Perferendis, distinctio quas?
        Deserunt quae placeat cumque, laborum accusamus incidunt sint pariatur corporis aspernatur, recusandae blanditiis, eum exercitationem dicta aut commodi eligendi quis doloremque perferendis maiores tenetur rem velit in quos? Vitae, tempore.
        Vel quisquam possimus aspernatur ab eveniet porro, exercitationem animi sunt unde delectus iusto maiores illum magni nihil dolore fugit quo fuga. Fugiat et quae accusamus distinctio eveniet nemo placeat molestias.
        Eaque facilis at hic quidem, temporibus, sapiente reprehenderit similique ullam dolore est mollitia quo doloremque dolorem consequatur soluta, corrupti nisi a esse aliquam repellendus? Enim delectus aspernatur quo officia recusandae.
        Error asperiores nisi aut ad! Aliquid tempore sequi quibusdam eos quod, ratione ex sit quam repudiandae optio incidunt dolore quas in, natus officia neque. Optio amet repudiandae culpa autem placeat?
        Est autem quas eligendi, nostrum architecto tempora, soluta fuga vitae sapiente expedita doloremque placeat harum qui nam consequatur facere a sunt eos enim at libero eaque deleniti tempore voluptates. Odio!
        Nobis, consectetur! Animi quis est obcaecati adipisci? A laudantium iste nisi eius voluptatibus. Deleniti, eius exercitationem, officia, ea magni inventore tempore nemo perferendis quidem asperiores illo repellendus illum consequatur ullam.
        Neque maxime quam consequuntur illo, excepturi facere quaerat reiciendis fuga magnam quidem et reprehenderit explicabo tenetur iure soluta rerum eligendi? Ad voluptas eveniet excepturi dolore, optio harum. Nobis, totam itaque!
        Optio placeat, quos tempore atque omnis nobis eligendi dolores animi modi porro eaque nostrum soluta totam corrupti reprehenderit molestias pariatur ex quas suscipit adipisci nesciunt nam. Ullam debitis cumque modi.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam fugit omnis culpa enim non rem saepe voluptatibus optio dolores et sed ratione, eveniet assumenda quo sint porro, ex voluptate.
        Provident, aperiam? Quae nemo maxime ipsa culpa dolorem expedita suscipit quos iure fugit modi cum quaerat repudiandae nam consequuntur incidunt, officia adipisci eius, beatae laudantium maiores praesentium. Perferendis, distinctio quas?
        Deserunt quae placeat cumque, laborum accusamus incidunt sint pariatur corporis aspernatur, recusandae blanditiis, eum exercitationem dicta aut commodi eligendi quis doloremque perferendis maiores tenetur rem velit in quos? Vitae, tempore.
        Vel quisquam possimus aspernatur ab eveniet porro, exercitationem animi sunt unde delectus iusto maiores illum magni nihil dolore fugit quo fuga. Fugiat et quae accusamus distinctio eveniet nemo placeat molestias.
        Eaque facilis at hic quidem, temporibus, sapiente reprehenderit similique ullam dolore est mollitia quo doloremque dolorem consequatur soluta, corrupti nisi a esse aliquam repellendus? Enim delectus aspernatur quo officia recusandae.
        Error asperiores nisi aut ad! Aliquid tempore sequi quibusdam eos quod, ratione ex sit quam repudiandae optio incidunt dolore quas in, natus officia neque. Optio amet repudiandae culpa autem placeat?
        Est autem quas eligendi, nostrum architecto tempora, soluta fuga vitae sapiente expedita doloremque placeat harum qui nam consequatur facere a sunt eos enim at libero eaque deleniti tempore voluptates. Odio!
        Nobis, consectetur! Animi quis est obcaecati adipisci? A laudantium iste nisi eius voluptatibus. Deleniti, eius exercitationem, officia, ea magni inventore tempore nemo perferendis quidem asperiores illo repellendus illum consequatur ullam.
        Neque maxime quam consequuntur illo, excepturi facere quaerat reiciendis fuga magnam quidem et reprehenderit explicabo tenetur iure soluta rerum eligendi? Ad voluptas eveniet excepturi dolore, optio harum. Nobis, totam itaque!
        Optio placeat, quos tempore atque omnis nobis eligendi dolores animi modi porro eaque nostrum soluta totam corrupti reprehenderit molestias pariatur ex quas suscipit adipisci nesciunt nam. Ullam debitis cumque modi.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam fugit omnis culpa enim non rem saepe voluptatibus optio dolores et sed ratione, eveniet assumenda quo sint porro, ex voluptate.
        Provident, aperiam? Quae nemo maxime ipsa culpa dolorem expedita suscipit quos iure fugit modi cum quaerat repudiandae nam consequuntur incidunt, officia adipisci eius, beatae laudantium maiores praesentium. Perferendis, distinctio quas?
        Deserunt quae placeat cumque, laborum accusamus incidunt sint pariatur corporis aspernatur, recusandae blanditiis, eum exercitationem dicta aut commodi eligendi quis doloremque perferendis maiores tenetur rem velit in quos? Vitae, tempore.
        Vel quisquam possimus aspernatur ab eveniet porro, exercitationem animi sunt unde delectus iusto maiores illum magni nihil dolore fugit quo fuga. Fugiat et quae accusamus distinctio eveniet nemo placeat molestias.
        Eaque facilis at hic quidem, temporibus, sapiente reprehenderit similique ullam dolore est mollitia quo doloremque dolorem consequatur soluta, corrupti nisi a esse aliquam repellendus? Enim delectus aspernatur quo officia recusandae.
        Error asperiores nisi aut ad! Aliquid tempore sequi quibusdam eos quod, ratione ex sit quam repudiandae optio incidunt dolore quas in, natus officia neque. Optio amet repudiandae culpa autem placeat?
        Est autem quas eligendi, nostrum architecto tempora, soluta fuga vitae sapiente expedita doloremque placeat harum qui nam consequatur facere a sunt eos enim at libero eaque deleniti tempore voluptates. Odio!
        Nobis, consectetur! Animi quis est obcaecati adipisci? A laudantium iste nisi eius voluptatibus. Deleniti, eius exercitationem, officia, ea magni inventore tempore nemo perferendis quidem asperiores illo repellendus illum consequatur ullam.
        Neque maxime quam consequuntur illo, excepturi facere quaerat reiciendis fuga magnam quidem et reprehenderit explicabo tenetur iure soluta rerum eligendi? Ad voluptas eveniet excepturi dolore, optio harum. Nobis, totam itaque!
        Optio placeat, quos tempore atque omnis nobis eligendi dolores animi modi porro eaque nostrum soluta totam corrupti reprehenderit molestias pariatur ex quas suscipit adipisci nesciunt nam. Ullam debitis cumque modi.
        </p>
    </div>;
};

export default MyComponent;
